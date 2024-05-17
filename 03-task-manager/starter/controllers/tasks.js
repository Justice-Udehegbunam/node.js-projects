const Task = require("../models/task");
const mongoose = require("mongoose");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/customError");

const getAllTasks = asyncWrapper(async (req, res) => {
  const findTask = await Task.find({});
  res.status(200).json({ tasks: findTask });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
  // console.log(req.body); add this line to test
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return next(createCustomError(`Not task with this id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`Not task with this id: ${taskID}`, 404));
  }
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const objectId = mongoose.Types.ObjectId(taskID);
  const updateObj = {
    $set: {
      name: req.body.name,
      completed: req.body.completed,
    },
  };

  const task = await Task.collection.findOne({ _id: objectId });
  if (!task) {
    return next(createCustomError(`Not task with this id: ${objectId}`, 404));
  } else {
    await Task.collection.updateOne({ _id: objectId }, updateObj);
    res.status(200).json({ msg: `Task updated successfully` });
  }
});
module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  getTask,
  deleteTask,
};
