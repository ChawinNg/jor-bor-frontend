import mongoose from "mongoose";

let isConnected = false;

export const dbConnect = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) return;

  const MONGO_URI = process.env.MONGODB_URL;
  if (!MONGO_URI) throw new Error("Please define MONGO_URI");

  try {
    await mongoose.connect(MONGO_URI, { bufferCommands: false });
    isConnected = true;
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};