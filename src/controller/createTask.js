import taskModel from "../model/taskModel.js";

const createTask = async (req, res) => {
  try {
    // 1. User से data प्राप्त करें
    const { taskName, isDone } = req.body;
    // 2. Data को database में save करने के लिए Task Model का उपयोग करें
    const newTask = new taskModel({ taskName, isDone });
    //3. Task save करें
    const savedTask = await newTask.save();
    // 4.  Success response दें
    res.status(200).json({ msg: "task created successfully", data: savedTask });
  } catch (error) {
    // 5.error handling
    res.status(500).json({ msg: "task is not created", error: error.message });
  }
};
export default createTask;
