import express, { Router, Request, Response } from "express";

export const apiRouter: Router = express.Router();

apiRouter.get("/", (req: Request, res: Response) => {
  res.send("OK");
});
