const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const findTask = await Task.find({});
    res.status(200).json({ tasks: findTask });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
    // console.log(req.body); add this line to test
  } catch (error) {
    res.status(500).json({ msg: error.message });
    // the "500" error code is a general server error status
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `Not task with this id: ${taskID}` });
    } // this error is used to check for if the character actually matches the amount of what mongoose is looking for but the data base doesnt have the id requested
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error }); // while this is just to show that there is a server error due to the id not being correct
  }
};

const updateTask = (req, res) => {
  res.send("update task ");
};

const deleteTask = (req, res) => {
  res.send("delete task ");
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  getTask,
  deleteTask,
};
