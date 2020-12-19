import { Schema } from "mongoose";

import mongoose = require("mongoose");

export interface Transportation {
  name: string;
  duration: number;
  fee: string;
  type: string;
  operator: string;
}

const TransportationSchema: Schema = new Schema({
  name: String,
  duration: Number,
  fee: String,
  type: String,
  operator: String,
});

module.exports = mongoose.model("transportation", TransportationSchema);
