import mongoose from "mongoose";

// Task Schema craeted

const taskSchema = new mongoose.Schema(
  {
    taskName: {
      type: String,
      reqiured: true,
    },
    isDone: {
      type: Boolean,
      default: false, // Default value
      reqiured: true,
    },
  },
  {
    timestamps: true,
  }
);

// // Task Model created
const taskModel = mongoose.model("Task", taskSchema);

export default taskModel;
