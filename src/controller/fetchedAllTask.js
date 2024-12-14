import taskModel from "../model/taskModel.js";

const fetchedAllTask = async (req, res) => {
  try {
    // 1. Database से सभी tasks को retrieve करें
    const tasks = await taskModel.find({});
    //2. Success response दें
    res.status(200).json({ msg: "Tasks fetched successfully", data: tasks });
  } catch (error) {
    // error handling
    res.status(500).json({ msg: "task is not created", error: error.message });
  }
};

export default fetchedAllTask;
