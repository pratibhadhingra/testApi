import express from 'express';
import userRoutes from "../Features/Auth/Routes";
import authRoutes from '../Features/Auth/Auth'
const rootRouter = express.Router();

rootRouter.use("/auth", authRoutes);
rootRouter.use("/users", userRoutes);

export default rootRouter