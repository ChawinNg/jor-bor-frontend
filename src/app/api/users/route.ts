import { Mongo } from "@/db/db";
import { IUser } from "@/shared/models/User";
import { ReturnError } from "@/utils/async";
import mongoose, { MongooseError } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const db = await Mongo.getInstance();
  let users = await ReturnError<IUser[]>(
    db.collection<IUser>("users").find().toArray()
  );
  if (users.error !== undefined) {
    return NextResponse.json(
      { message: (users.error as MongooseError).message },
      { status: 500 }
    );
  }

  return NextResponse.json(
    users.value.map((val: IUser) => ({
      id: val._id?.toString(),
      username: val.username,
      score: val.score,
    })),
    { status: 200 }
  );
}

export async function PATCH(req: NextRequest) {
  let session = req.cookies.get("session");
  if (session === undefined)
    return NextResponse.json({ message: "login required" }, { status: 401 });

  let body = await ReturnError<{ username: string }>(req.json());
  if (body.error !== undefined) {
    return NextResponse.json({ message: "empty body" }, { status: 400 });
  }

  if (body.value.username === undefined)
    return NextResponse.json({ message: "invalid body" }, { status: 400 });

  let userId = new mongoose.Types.ObjectId(session.value);

  const db = await Mongo.getInstance();
  let { error: err } = await ReturnError(
    db
      .collection<IUser>("users")
      .findOneAndUpdate(
        { _id: userId },
        { $set: { username: body.value.username } }
      )
  );
  if (err !== undefined) {
    console.error(err);
    return NextResponse.json(
      { message: (err as MongooseError).message },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "updated" }, { status: 200 });
}
