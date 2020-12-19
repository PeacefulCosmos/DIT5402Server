import { Request, Response } from "express";
import { Router } from "express";
import * as SpotSer from "./spot.service";

export const SpotRouter = Router();

SpotRouter.get(`/`, async (req: Request, res: Response) => {
  res.send(await SpotSer.listAllSpot());
});

SpotRouter.post(`/`, async (req: Request, res: Response) => {
  res.status(200).send(await SpotSer.createSpot(req.body));
});

SpotRouter.delete(`/`, async (req: Request, res: Response) => {
  res.status(200).send(await SpotSer.deleteAll());
});
