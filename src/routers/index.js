import { Router } from "express";
import flatRouter from "./flat.js";

const router = Router();

router.use("/flat", flatRouter);

export default router;
