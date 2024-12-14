import mongoose from "mongoose";

const connectDB = async () => {
  const MONGOURL = process.env.MONGO_URL;
  try {
    await mongoose.connect(MONGOURL);
    console.log("mongoose connect");
  } catch (error) {
    console.log("error:", error);
  }
};

export default connectDB;
