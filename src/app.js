import express from "express";
import connectDB from "./config/databse.js";
import taskRouter from "./router/taskRouter.js";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

// Load environment variables
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/", taskRouter);

const PORT = process.env.PORT;

connectDB()
  .then(() => {
    console.log("datbase connection established successfully");
    app.listen(PORT, () => {
      console.log(`server listening on port number is : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("error", err);
  });
