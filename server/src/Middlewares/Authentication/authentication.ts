import { Request, Response, NextFunction } from "express";

export const verifyToken = (req: any, res: Response, next: NextFunction) => {
  const bearerHeader: any = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    res.send({
      result: "Token is not valid",
    });
  }
};
