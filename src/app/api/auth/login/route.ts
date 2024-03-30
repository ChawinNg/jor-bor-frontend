import { IUser } from "@/shared/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { Mongo } from "@/db/db";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  let body = (await req.json()) as IUser;

  if (body.username === undefined || body.password === undefined) {
    return NextResponse.json(
      { reason: "invalid username or password field" },
      { status: 400 }
    );
  }

  let db = await Mongo.getInstance();
  let user = await db
    .collection<IUser>("users")
    .findOne({ username: body.username });

  if (!user)
    return NextResponse.json({ message: "user not found" }, { status: 404 });

  let match = await bcrypt.compare(body.password, user.password);

  if (!match)
    return NextResponse.json(
      { message: "invalid credentials" },
      { status: 401 }
    );

  cookies().set("session", user._id.toString(), {
    expires: Date.now() + 1000 * 60 * 60 * 24,
  });

  return NextResponse.json({ message: "success" }, { status: 200 });
}
