import { IUser } from "@/shared/models/User";
import { MongooseError } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { Mongo } from "@/db/db";
import { ReturnError } from "@/utils/async";

export async function POST(req: NextRequest) {
  let body = await ReturnError<IUser>(req.json());
  if (body.error !== undefined) {
    return NextResponse.json({ message: "empty body" }, { status: 400 });
  }

  if (body.value.username === undefined || body.value.password === undefined)
    return NextResponse.json(
      { reason: "invalid username or password field" },
      { status: 400 }
    );

  let hash = await ReturnError<string>(
    bcrypt.genSalt().then((salt) => bcrypt.hash(body.value.password, salt))
  );
  if (hash.error !== undefined) {
    return NextResponse.json({ message: hash.error.message }, { status: 500 });
  }

  let user: IUser = {
    username: body.value.username,
    password: hash.value,
    score: 0,
  };

  const db = await Mongo.getInstance();
  let { error: err } = await ReturnError(
    db.collection("users").insertOne(user)
  );
  if (err !== undefined) {
    return NextResponse.json(
      { message: (err as MongooseError).message },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "user created" }, { status: 201 });
}
