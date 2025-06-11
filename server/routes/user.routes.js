import { Router } from "express";
import { registerUser } from "../controlers/user.controlers.js";
import {upload} from "../middlewares/multer.middlewares.js";
const router = Router();

router.route("/register").post(upload.none(), registerUser);

export default router;