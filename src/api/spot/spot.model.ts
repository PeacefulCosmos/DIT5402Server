import { Schema } from "mongoose";

import mongoose = require("mongoose");

export interface Spot {
  name: string;
  fee: number;
  type: string;
  openingTime: number;
  closingTime: number;
  location: string;
  duration: number;
  closingDate: closingDate;
  description: string;
}

export interface closingDate {
  twentyFourSeven: boolean;
  exceptHoliday: boolean;
  regular: number;
  arbitrary: Date;
}

const SpotSchema: Schema = new Schema({
  name: String,
  fee: Number,
  type: String,
  openingTime: Number,
  closingTime: Number,
  location: String,
  duration: Number,
  closingDate: Object,
  description: String,
});

module.exports = mongoose.model("spot", SpotSchema);
// export interface Spot {
//   name: string;
//   type: string;
//   openingTime: number;
//   closingTime: number;
//   location: string;
//   holiday: Array<Date> | boolean;
//   description: string;
// }

// export class shoppingCentre implements Spot {
//   name: string;
//   type: string;
//   openingTime: number;
//   closingTime: number;
//   location: string;
//   holiday: Date[];
//   description: string;

//   constructor(
//     name: string,
//     type: string,
//     openingTime: number,
//     closingTime: number,
//     location: string,
//     holiday: Date[],
//     description: string
//   ) {
//     this.name = name;
//     this.type = type;
//     this.openingTime = openingTime;
//     this.closingTime = closingTime;
//     this.location = location;
//     this.holiday = holiday;
//     this.description = description;
//   }
// }

// export let theBigBuddha: Spot = {
//   name: `The Big Buddha`,
//   fee: 100,
//   type: `View`,
//   openingTime: 9,
//   closingTime: 17,
//   location: "Hong Kong",
//   closingDate: {
//     twentyFourSeven: false,
//     exceptHoliday: false,
//     regular: 4,
//     arbitrary: new Date(0),
//   },
//   description: "des1",
// };
