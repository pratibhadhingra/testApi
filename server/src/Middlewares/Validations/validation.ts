import { Request, Response, NextFunction } from "express";
import Joi from "@hapi/joi";

export const validationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const Schema = Joi.object().keys({
    name: Joi.required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(2).required(),
  });

  const { error, value } = Schema.validate(req.body.data);
  if (error) {
    console.log(error);
    res.status(200).json({ error: error });
  } else {
    console.log("hello", value);
    next();
  }
};


