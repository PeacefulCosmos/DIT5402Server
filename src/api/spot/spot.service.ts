import * as spotModel from "./spot.model";

// Get all spots
export const listAllSpot = async () => {};

//Set spot detail
export const setSpot = async (spotData: spotModel.SpotInput) => {
  let holidaysArray = await getHolidaysinMonth(spotData.closingDate);
  spotData.closingDate;
};

export const getHolidaysinMonth = async (
  closingDate: spotModel.closingDate
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
  if (closingDate.regular !== 0) {
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
