import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import {
  getFlatsController,
  getFlatController,
  createFlatController,
  patchFlatController,
} from "../controllers/flat.js";
import { flatSchema } from "../validation/flatSchema.js";
import { validateBody } from "../middlewares/validateBody.js";
import { validateMongoId } from "../middlewares/validateMongoId.js";

const router = Router();

router.get("/", ctrlWrapper(getFlatsController));

router.get(
  "/:flatId",
  validateMongoId("flatId"),
  ctrlWrapper(getFlatController)
);

router.post("/", validateBody(flatSchema), ctrlWrapper(createFlatController));

router.patch(
  "/:flatId",
  //   upload.single("photo"),
  validateBody(flatSchema, true),
  ctrlWrapper(patchFlatController)
);

export default router;
