import { IUser, IUserCredential } from "@/shared/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { Mongo } from "@/db/db";
import { cookies } from "next/headers";
import { MongooseError } from "mongoose";
import { ReturnError } from "@/utils/async";

export async function POST(req: NextRequest) {
  let body = await ReturnError<IUserCredential>(req.json());
  if (body.error !== undefined) {
    return NextResponse.json({ message: "empty body" }, { status: 400 });
  }

  if (body.value.username === undefined || body.value.password === undefined) {
    return NextResponse.json(
      { reason: "invalid username or password field" },
      { status: 400 }
    );
  }

  let db = await Mongo.getInstance();
  let user = await ReturnError<IUser | null>(
    db.collection<IUser>("users").findOne({ username: body.value.username })
  );
  if (user.error !== undefined) {
    console.error(user.error);
    return NextResponse.json(
      { message: (user.error as MongooseError).message },
      { status: 500 }
    );
  }

  if (!user.value)
    return NextResponse.json({ message: "user not found" }, { status: 404 });

  let match = await ReturnError<boolean>(
    bcrypt.compare(body.value.password, user.value.password)
  );
  if (match.error !== undefined) {
    return NextResponse.json(
      { message: (match.error as MongooseError).message },
      { status: 500 }
    );
  }

  if (!match.value)
    return NextResponse.json(
      { message: "credential does not match" },
      { status: 401 }
    );

  cookies().set("session", user.value._id!.toString(), {
    expires: Date.now() + 1000 * 60 * 60 * 24,
  });

  return NextResponse.json({ message: "success" }, { status: 200 });
}
