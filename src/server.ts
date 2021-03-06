import express = require("express");
import { Response, Request } from "express";
import * as bodyParser from "body-parser";
import { apiRouter } from "./route";
// const mongoose = require("mongoose");
// import * as mongoose from "mongoose";
import mongoose = require("mongoose");
const app = express();
const PORT: number = 3000;
const db = "mongodb://localhost:27017/assignment";

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Test Server");
});

app.use("/apiRouter", apiRouter);

// mongoose
//   .connect("db", { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log(`Mongodb is connected`);
//   });

mongoose.connect(db, (err) => {
  if (err) console.log(`Mongodb failure`);
  else console.log(`Mongodb is connected`);
});
app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});
