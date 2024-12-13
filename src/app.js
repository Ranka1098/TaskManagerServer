import express from "express";
import connectDB from "./config/databse.js";

const app = express();

connectDB()
  .then(() => {
    console.log("datbase connection established successfully");
    app.listen(3000, () => {
      console.log("server listening on port number 3000");
    });
  })
  .catch((err) => {
    console.log("error", err);
  });
