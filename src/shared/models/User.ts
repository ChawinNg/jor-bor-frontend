import { Types } from "mongoose";

export interface IUser {
  _id?: Types.ObjectId;
  username: string;
  password: string;
  score: number;
}

export interface IUserCredential {
  username: string;
  password: string;
}
