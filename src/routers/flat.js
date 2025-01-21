import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import {
  createFlatController,
  getFlatsController,
} from "../controllers/flat.js";
import { flatSchema } from "../validation/flatSchema.js";
import { validateBody } from "../middlewares/validateBody.js";

const router = Router();

router.get("/", ctrlWrapper(getFlatsController));

router.post("/", validateBody(flatSchema), ctrlWrapper(createFlatController));

export default router;
