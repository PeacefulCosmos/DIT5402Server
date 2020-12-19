import * as spotInt from "./spot.model";
const SpotM = require("./spot.model");

// Get all spots
export const listAllSpot = async () => {};

//Set spot detail
export const setSpot = async (spotData: spotInt.Spot): Promise<String> => {
  let spotModel = new SpotM(spotData);
  spotModel.save((err: Error, registeredSpot: spotInt.Spot) => {
    if (err) console.log(err);
    else console.log(registeredSpot);
  });
  return "OK";
};

//return the holidays in month
export const getHolidaysinMonth = async (
  closingDate: spotInt.closingDate
): Promise<Array<Date>> => {
  let d: Date = new Date(),
    month: number = d.getMonth(),
    holidayInMonth: Array<Date> = [];
  d.setDate(1);

  // 24/7
  if (closingDate.twentyFourSeven === true) {
    return holidayInMonth;
  }

  // Day after public holiday

  // A weekly closing day
  if (closingDate.regular >= 1 && closingDate.regular <= 7) {
    while (d.getMonth() === month) {
      if (d.getDay() === closingDate.regular)
        holidayInMonth.push(new Date(d.getTime()));
      d.setDate(d.getDate() + 1);
    }
  }

  // Arbitary day
  if (closingDate.arbitrary.getTime() >= new Date().getTime()) {
    //   let y: number = closingDate.arbitrary.getDate();
    //   console.log(y)
    holidayInMonth.push(closingDate.arbitrary);
  }
  console.log(holidayInMonth);
  return holidayInMonth;
};
