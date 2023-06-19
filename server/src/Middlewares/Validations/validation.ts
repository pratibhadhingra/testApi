import { Request, Response, NextFunction } from "express";
import Joi from "@hapi/joi";

export const validationAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const Schema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(2).required(),
  });

  const { error, value } = Schema.validate(req.body);
  if (error) {
    console.log("error", error);
    res.status(500).json({ error: error });
  } else {
    next();
  }
};

export const validationProfile = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const Schema = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phoneNo: Joi.string().min(10).max(10).required(),
    address: Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
  });

  const { error } = Schema.validate(req.body);

  if (error) {
    res.status(500).json({ error: error });
  } else {
    next();
  }
};
