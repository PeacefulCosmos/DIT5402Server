import { Request, Response } from "express";
import { Router } from "express";
import * as SpotSer from "./spot.service";

export const SpotRouter = Router();

SpotRouter.get(`/`, async (req: Request, res: Response) => {
  res.send(await SpotSer.listAllSpot());
});

SpotRouter.post(`/`, async (req: Request, res: Response) => {
  await SpotSer.setSpot(req.body);
  res.send();
});