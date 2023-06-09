import express from "express";
import { deleteApi, getApi, patchApi, postApiProfile } from "./Controllers";
import { verifyToken } from "../../Middlewares/Authentication/authentication";

const router = express.Router();

// all routes in here are starting with /users

router.get("/profile", getApi);

router.post('/profile', verifyToken, postApiProfile)

router.delete("/:id", deleteApi);

router.patch("/:id", patchApi);

export default router;
