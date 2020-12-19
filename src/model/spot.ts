interface Spot {
  fee: number;
  openingTime: number;
  closingTime: number;
  location: string;
  closingDate: closingDate;
  description: string;
}

interface closingDate {
  twentyFourSeven: boolean;
  exceptHoliday: boolean;
  regular: number;
  arbitrary: Date;
}

let museum1: Spot = {
  fee: 100,
  openingTime: 9,
  closingTime: 17,
  location: "japan",
  closingDate: {
    twentyFourSeven: false,
    exceptHoliday: false,
    regular: 4,
    arbitrary: new Date(0),
  },
  description: "des1",
};

function getHolidaysinMonth(closingDate: closingDate): Array<Date> {
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
}

getHolidaysinMonth(museum1.closingDate);
