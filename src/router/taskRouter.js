import express from "express";
import createTask from "../controller/createTask.js";
import fetchedAllTask from "../controller/fetchedAllTask.js";
import updatetask from "../controller/updateTask.js";
import deletetask from "../controller/deletetask.js";
import StatusTask from "../controller/StatusTask.js";
import deleteAllTask from "../controller/deleteAllTask.js";

const taskRouter = express.Router();

taskRouter.post("/create", createTask);
taskRouter.get("/fetched", fetchedAllTask);
taskRouter.put("/update/:id", updatetask);
taskRouter.delete("/delete/:id", deletetask);
taskRouter.put("/status/:id", StatusTask);
taskRouter.delete("/deleteAll", deleteAllTask);

export default taskRouter;
