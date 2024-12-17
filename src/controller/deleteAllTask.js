import taskModel from "../model/taskModel.js";

const deleteAllTask = async (req, res) => {
  try {
    await taskModel.deleteMany({});
    res.status(200).json({ msg: "dleted all task sucessfully" });
  } catch (error) {
    console.log("error : ", error);
  }
};

export default deleteAllTask;
