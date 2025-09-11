import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not defined in environment variables");
  }
  try {
    const client = await mongoose.connect(uri);
    console.log("Mongodb connected");
    return client;
  } catch (error) {
    console.log("Something went wrong with DB", error);
    throw new Error("db connection failed");
  }
};
