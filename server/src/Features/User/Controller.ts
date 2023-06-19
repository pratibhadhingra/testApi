import { Request, Response } from "express";
import { ProfileService } from "./Service";

export const getProfileApi = async (req: Request, res: Response) => {
  try {
    const data = await ProfileService.getUserProfile();
    if (data.code === 200) {
      res.send(data);
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
