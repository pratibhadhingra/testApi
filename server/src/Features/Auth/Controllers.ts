import { Request, Response } from "express";
import { AuthServices } from "./Services";


export const postLoginApi = async (req: Request, res: Response) => {
  try {

    const body = req.body;
    const data = await AuthServices.loginService(body);
    if (data?.status == 200) {
      // const token = data?.token 
      // res.cookie('token', token, {
      //   expires  : new Date(Date.now() + 9999999),
      //   httpOnly : false
      // });
      res.json(data);
    } else {
      res.status(data?.status ?? 401).json(data);
    }
  } catch (error: any) {
    res.status(error?.status ?? 500).json(error);
  }
};
