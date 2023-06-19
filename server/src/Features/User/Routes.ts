import express from "express";
import { getProfileApi, postProfileApi } from "./Controller";
import { validationProfile } from "../../Middlewares/Validations/validation";

const userRouter = express.Router();

userRouter.post("/", validationProfile, postProfileApi);

userRouter.get("/", getProfileApi);

export default userRouter;
