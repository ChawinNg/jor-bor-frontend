import { Mongo } from "@/db/db";
import { IUser } from "@/shared/models/User";
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
