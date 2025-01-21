import express from "express";
import cors from "cors";

import router from "./routers/index.js";
import { env } from "./utils/env.js";
import { ENV_VARS } from "./constants/index.js";

import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";

export const setupServer = () => {
  const PORT = env(ENV_VARS.PORT, "3000");
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/api", router);
  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, (error) => {
    if (error) {
      console.log("Server crushed. error: ", error);
      process.exit(1);
    }
    console.log("Server is running on port", PORT);
  });
};
