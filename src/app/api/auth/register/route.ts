import { IUser } from "@/shared/models/User";
import { MongooseError } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { Mongo } from "@/db/db";

export async function POST(req: NextRequest) {
  let body: IUser;
  try {
    body = (await req.json()) as IUser;
  } catch (err) {
    return NextResponse.json({ message: "empty body" }, { status: 400 });
  }

  if (body.username === undefined || body.password === undefined) {
    return NextResponse.json(
      { reason: "invalid username or password field" },
      { status: 400 }
    );
  }

  let user: IUser = {
    username: body.username,
    password: await bcrypt
      .genSalt()
      .then((salt) => bcrypt.hash(body.password, salt)),
    score: 0,
  };

  try {
    const db = await Mongo.getInstance();
    await db.collection("users").insertOne(user);
    return NextResponse.json({ message: "user created" }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: (err as MongooseError).message },
      { status: 500 }
    );
  }
}
