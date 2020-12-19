import { Request, Response } from "express";
import { Router } from "express";
import * as TransportSer from "./transportation.service";

export const TransportRouter = Router();

TransportRouter.get(`/`, async (req: Request, res: Response) => {
  res.send(await TransportSer.listAllTransportation);
});

TransportRouter.post(`/`, async (req: Request, res: Response) => {
  res.status(200).send(await TransportSer.createTransportation(req.body));
});
