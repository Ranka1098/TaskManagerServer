import taskModel from "../model/taskModel.js";

const StatusTask = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    console.log("Request Body:", req.body);

    const updateStatus = await taskModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).json({ msg: "updated status", data: updateStatus });
  } catch (error) {
    console.log("error :", error);
  }
};

export default StatusTask;
