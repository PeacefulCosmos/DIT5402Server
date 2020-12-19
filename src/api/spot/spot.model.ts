export interface SpotInput {
  name: string;
  type: string;
  openingTime: number;
  closingTime: number;
  location: string;
  closingDate: closingDate;
  description: string;
}

export interface closingDate {
  twentyFourSeven: boolean;
  exceptHoliday: boolean;
  regular: number;
  arbitrary: Date;
}

export interface Spot {
  name: string;
  type: string;
  openingTime: number;
  closingTime: number;
  location: string;
  holiday: Array<Date>;
  description: string;
}

export class shoppingCentre implements Spot {
  name: string;
  type: string;
  openingTime: number;
  closingTime: number;
  location: string;
  holiday: Date[];
  description: string;

  constructor(
    name: string,
    type: string,
    openingTime: number,
    closingTime: number,
    location: string,
    holiday: Date[],
    description: string
  ) {
    this.name = name;
    this.type = type;
    this.openingTime = openingTime;
    this.closingTime = closingTime;
    this.location = location;
    this.holiday = holiday;
    this.description = description;
  }
}

export let theBigBuddha: SpotInput = {
  name: `The Big Buddha`,
  type: `View`,
  openingTime: 9,
  closingTime: 17,
  location: "Hong Kong",
  closingDate: {
    twentyFourSeven: false,
    exceptHoliday: false,
    regular: 4,
    arbitrary: new Date(0),
  },
  description: "des1",
};
