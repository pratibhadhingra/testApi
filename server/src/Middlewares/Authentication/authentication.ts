import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { secretKey } from "../../Features/Auth/Services";

// export const verifyToken = (req: any, res: Response, next: NextFunction) => {
//   const bearerHeader: any = req.headers["authorization"];

//   if (typeof bearerHeader !== "undefined") {
//     const bearer = bearerHeader.split(" ");
//     const token = bearer[1];
//     req.token = token;

//     jwt.verify(req.token, secretKey , (err: any) => {
//     if(err){
//       res.send({
//         result: "Invalid token"
//       })
//     } else {
//       res.json({
//         message: "Profile accessed",

//       })
//     }
//   })
//   next();
//   } else {
//     res.send({
//       result: "Token is not valid",
//     });
//   }
// };


export const verifyToken = (req: any, res: Response, next: NextFunction) => {
  const token =  localStorage.getItem('myToken') || ''
 
  const result = token ? JSON.parse(token) : undefined
  console.log(result)
  console.log('hello')
//   if(token) {
// window.localStorage.removeItem(token);

//     // res.send("Token is not valid");
//   }
  // else {
  //   jwt.verify(token, secretKey, (err: any) => {
  //     if(err) {
  //       res.json({auth: false, message: "failed to authenticate"})
  //     }
  //     else {
  //       // window.localStorage.removeItem(token);
  //       next();
  //     }
  //   })
  // }
next();
}