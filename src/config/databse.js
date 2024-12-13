import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ashokranka30:sbX3Ei9LhwPmW.p@cluster0.zv0qp.mongodb.net/TaskManager"
    );
    console.log("mongoose connect");
  } catch (error) {
    console.log("error:", error);
  }
};

export default connectDB;
