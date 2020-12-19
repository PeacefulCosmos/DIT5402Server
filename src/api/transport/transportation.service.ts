import * as transportationInt from "./transportation.model";
const transportationM = require("./transportation.model");

// Get all transportation
export const listAllTransportation = async (): Promise<
  Array<transportationInt.Transportation>
> => {
  return transportationM.find({});
};

//Create transportation
export const createTransportation = async (transportData: any) => {
  let transportArr: Array<transportationInt.Transportation> =
    transportData.transport;
  let transportModel: any = null;
  for await (let doc of transportArr) {
    transportModel = new transportationM(doc);
    transportModel.save(
      (err: Error, registeredTransport: transportationInt.Transportation) => {
        if (err) console.log(err);
        else console.log(registeredTransport);
      }
    );
  }
  return "OK";
};

//Delete all transport
export const deleteAll = async (): Promise<String> => {
  let message: string = "";
  await transportationM.remove({}, (err: Error) => {
    if (err) {
      console.log(err);
      message = "Error";
    } else {
      message = "Delete all transportation";
    }
  });
  return message;
};
