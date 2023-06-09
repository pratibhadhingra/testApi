import express from "express";
import { postApi } from "./Controllers";
import { validationMiddleware } from '../../Middlewares/Validations/validation';

const auth = express.Router();

auth.post("/", validationMiddleware, postApi);

export default auth