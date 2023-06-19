
import express from "express";
import { postLoginApi } from "./Controllers";
import { validationAuth } from "../../Middlewares/Validations/validation";

const auth = express.Router();

auth.post("/",validationAuth, postLoginApi);

export default auth