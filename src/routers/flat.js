import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import {
  getFlatsController,
  getFlatController,
  createFlatController,
  patchFlatController,
  deleteFlatController,
} from "../controllers/flat.js";
import { flatSchema } from "../validation/flatSchema.js";
import { validateBody } from "../middlewares/validateBody.js";
import { validateMongoId } from "../middlewares/validateMongoId.js";
import { upload } from "../middlewares/multer.js";

const router = Router();

router.get("/", ctrlWrapper(getFlatsController));

router.get(
  "/:flatId",
  validateMongoId("flatId"),
  ctrlWrapper(getFlatController)
);

router.post(
  "/",
  upload.single("photo"),
  validateBody(flatSchema),
  ctrlWrapper(createFlatController)
);

router.patch(
  "/:flatId",
  validateMongoId("flatId"),
  upload.single("photo"),
  validateBody(flatSchema, true),
  ctrlWrapper(patchFlatController)
);

router.delete(
  "/:flatId",

  validateMongoId("flatId"),

  ctrlWrapper(deleteFlatController)
);
export default router;
