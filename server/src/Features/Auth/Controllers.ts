import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

let userData: any = [];
const secretKey = "secretKey"

export const postApi = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    userData.push({ ...user, id: uuidv4() });
    // res.send(userData.data);
  } catch (error: any) {
    res.status(error.output?.statusCode ?? 500).json(error);
  }

  jwt.sign({userData}, secretKey, {expiresIn: "300s"}, (err, token) => {
    res.json({token})
  })
};

export const postApiProfile = (req: any, res: Response) => {
    jwt.verify(req.token, secretKey , (err: any) => {
      if(err){
        res.send({
          result: "Invalid token"
        })
      } else {
        res.json({
          message: "Profile accessed",
          userData
        })
      }
    })
}

export const getApi = (req: Request, res: Response) => {
  try {
    res.send(userData);
    console.log(userData);
  } catch (error: any) {
    res.status(error.output?.statusCode ?? 500).json(error);
  }
};

export const deleteApi = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    userData = userData.filter((item: any) => item.id !== id);
    res.send(userData);
  } catch (error: any) {
    res.status(error.output?.statusCode ?? 500).json(error);
  }
};

export const patchApi = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { firstName, lastName, age } = req.body;

    const user = userData.find((user: any) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`user with ${id} has been updated`);
  } catch (error: any) {
    res.status(error.output?.statusCode ?? 500).json(error);
  }
};
