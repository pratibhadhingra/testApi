import express from "express";
import { getProfileApi, postProfileApi } from "./Controller";
import { validationProfile } from "../../Middlewares/Validations/validation";
import { verifyToken } from "../../Middlewares/Authentication/authentication";

const userRouter = express.Router();

// userRouter.post("/", validationProfile, verifyToken, postProfileApi);

userRouter.get("/",verifyToken, getProfileApi);

userRouter.post("/", validationProfile,verifyToken, postProfileApi);

// userRouter.get("/", getProfileApi);

export default userRouter;
