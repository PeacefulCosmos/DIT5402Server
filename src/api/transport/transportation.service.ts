import * as transportation from "./transportation.model";

// Get all spots
export const listAllSpot = async () => {};

//Set spot detail
export const setSpot = async (spotData: spotModel.SpotInput) => {
  let holidaysArray = await getHolidaysinMonth(spotData.closingDate);
  spotData.closingDate;
};