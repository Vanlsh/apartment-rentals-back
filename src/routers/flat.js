import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { getFlatController } from "../controllers/flat.js";

const router = Router();

router.get("/", ctrlWrapper(getFlatController));

export default router;
