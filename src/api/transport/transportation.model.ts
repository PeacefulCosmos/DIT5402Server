import { Schema } from "mongoose";

import mongoose = require("mongoose");

export interface Transportation {
    name: string;
    duration: Date;
    cost: string
    isPublic: boolean
    type: string;
    operator: string;
}

const TransportationSchema: Schema = new Schema({
    name: String,
    duration: Date,
    cost: String,
    isPublic: Boolean,
    type: String,
    operator: String,
});

module.exports = mongoose.model("transportation", TransportationSchema);