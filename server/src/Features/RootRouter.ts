import express from 'express';

import authRoutes from './Auth/Routes'
import userRouter from './User/Routes';
const rootRouter = express.Router();

rootRouter.use("/auth", authRoutes);
rootRouter.use("/users", userRouter);

export default rootRouter