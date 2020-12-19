import * as transportationInt from "./transportation.model";
const transportationM = require("./transportation.model");

// Get all transportation
export const listAllTransportation = async (): Promise<
  Array<transportationInt.Transportation>
> => {
  return transportationM.find({});
};

//Set spot transportation
export const createTransportation = async (
  transportData: transportationInt.Transportation
) => {
  let transportModel = new transportationM(transportData);
  transportModel.save(
    (err: Error, registeredTransport: transportationInt.Transportation) => {
      if (err) console.log(err);
      else console.log(registeredTransport);
    }
  );
  return "OK";
};
