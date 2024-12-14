import express from "express";
import createTask from "../controller/createTask.js";
import fetchedAllTask from "../controller/fetchedAllTask.js";

const taskRouter = express.Router();

taskRouter.post("/create", createTask);
taskRouter.get("/fetched", fetchedAllTask);

export default taskRouter;
