import taskModel from "../model/taskModel.js";
import mongoose from "mongoose";

const deleteTask = async (req, res) => {
  try {
    // 1.get id
    const id = req.params.id;
    // 2. Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: "Invalid ID format" });
    }
    // 3.delete from model
    const deleteTask = await taskModel.findByIdAndDelete(id);

    // 4. Check if task exists
    if (!deleteTask) {
      return res.status(404).json({ msg: "Task not found" });
    }
    // 4.success message response
    res.status(200).json({ msg: "task is deleted", data: deleteTask });
  } catch (error) {
    res.status(500).json({ msg: "error to delete task", error: error.message });
  }
};

export default deleteTask;
