import express, { Request, Response } from "express";

const router = express.Router();

router.use("/", (req: Request, res: Response) => {
  res.send("Application started successfully");
});

export default router;
