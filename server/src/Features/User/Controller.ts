import { Request, Response } from "express";
import { ProfileService } from "./Service";

export const getProfileApi = async (req: Request, res: Response) => {
  try {
    const data = await ProfileService.getUserProfile();
    const bearerHeader: any = req.headers.header || req.headers["authorization"]
  
    if (data.code === 200) {
      if(typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const token = bearer[2];
        res.send({...data, token})
      }
      else {

        res.send(data);
      }
    }
  } catch (error: any) {
    res.status(error.output?.statusCode ?? 500).json(error);
  }
};

export const postProfileApi = async (req: Request, res: Response) => {
  const profile = req.body;

  try {
    const data = await ProfileService.postUserService(profile);

    res.json(data);
  } catch (error: any) {
    res.status(error.output?.statusCode ?? 500).json(error);
  }
};
