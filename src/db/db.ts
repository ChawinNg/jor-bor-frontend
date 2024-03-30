import mongoose from "mongoose";

export class Mongo {
  private static instance: typeof mongoose;
  public static async getInstance(): Promise<mongoose.Connection> {
    if (this.instance === undefined) {
      const MONGODB_URL = process.env.MONGODB_URL;
      if (!MONGODB_URL) throw new Error("Please define MONGO_URI");

      try {
        this.instance = await mongoose.connect(MONGODB_URL, {
          bufferCommands: false,
        });
        console.log("Connected");
      } catch (err) {
        console.log(err);
      }
    }

    return this.instance.connection;
  }
}
