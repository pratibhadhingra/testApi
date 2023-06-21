import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { secretKey } from "../../Features/Auth/Services";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {

  const bearerHeader: any = req.headers.header || req.headers["authorization"]
 
  if(typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[2];
    // req.token = token;
    // console.log("req",token)
  

    jwt.verify(token, secretKey, (err: any) => {
      if(err) {
        res.json({auth: false, message: "failed to authenticate"})
      }
      else {
        next();
      }
    })
  }
  else {
    res.send("Token is not valid");
  }
}