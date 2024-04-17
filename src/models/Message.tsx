import { IUser } from "./User";

export interface Messages {
  user: IUser;
  message: string;
  time: Date;
}
