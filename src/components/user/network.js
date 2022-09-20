import { Router } from "express";
import * as Controller from "./controller";

const userRouter = Router();

userRouter.get("/", Controller.findAll);
userRouter.post("/", Controller.store);

export default userRouter;