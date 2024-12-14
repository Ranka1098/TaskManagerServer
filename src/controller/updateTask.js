import taskModel from "../model/taskModel.js";

const updatetask = async (req, res) => {
  try {
    // 1.get id fromparams
    const id = req.params.id;
    //   2.get data from body
    const updateData = req.body;
    // 3.अगर Body खाली है, तो error फेंके
    if (!updateData) {
      res.status(400).json({ msg: "no data is provided" });
    }

    // 4.update task in databse
    const updatedtask = await taskModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    // 5.अगर ID सही नहीं है (task null है)
    if (!updatedtask) {
      res.status(400).json({ msg: "task not found" });
    }
    // 6.Success response भेजें
    res
      .status(200)
      .json({ msg: "task updated successfully", data: updatedtask });
  } catch (error) {
    res.status(500).json({ msg: "Error updating tasks", error: error.message });
  }
};

export default updatetask;
