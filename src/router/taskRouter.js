import express from "express";
import createTask from "../controller/createTask.js";

const taskRouter = express.Router();

taskRouter.post("/create", createTask);

export default taskRouter;
