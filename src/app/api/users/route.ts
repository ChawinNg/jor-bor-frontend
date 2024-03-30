import { Mongo } from "@/db/db";
import { IUser } from "@/shared/models/User";
import mongoose, { Mongoose, MongooseError, Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const db = await Mongo.getInstance();
  let users = await db.collection<IUser>("users").find().toArray();

  return NextResponse.json(
    users.map((val: IUser) => ({
      id: val._id?.toString(),
      username: val.username,
      score: val.score,
    })),
    {
      status: 200,
    }
  );
}

export async function PATCH(req: NextRequest) {
  let session = req.cookies.get("session");

  if (session === undefined)
    return NextResponse.json({ message: "login required" }, { status: 401 });

  let body: { username: string };
  try {
    body = await req.json();
    if (body.username === undefined) throw new Error("no username");
  } catch (err) {
    return NextResponse.json({ message: "invalid body" }, { status: 400 });
  }

  let userId = new mongoose.Types.ObjectId(session.value);

  const db = await Mongo.getInstance();
  try {
    await db
      .collection<IUser>("users")
      .findOneAndUpdate({ _id: userId }, { $set: { username: body.username } });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: (err as MongooseError).message },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "updated" }, { status: 200 });
}
