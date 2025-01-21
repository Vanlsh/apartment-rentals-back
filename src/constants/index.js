import path from "path";

export const ENV_VARS = {
  PORT: "PORT",
  MONGODB_USER: "MONGODB_USER",
  MONGODB_PASSWORD: "MONGODB_PASSWORD",
  MONGODB_URL: "MONGODB_URL",
  MONGODB_DB: "MONGODB_DB",
};

export const CLOUDINARY = {
  CLOUD_NAME: "CLOUD_NAME",
  API_KEY: "API_KEY",
  API_SECRET: "API_SECRET",
};

// export const SWAGGER_PATH = path.join(process.cwd(), 'docs', 'swagger.json');

export const PER_PAGE_LIMIT = 100;
export const DEFAULT_PAGE = 1;
export const DEFAULT_PER_PAGE = 10;

export const TEMP_UPLOAD_DIR = path.join(process.cwd(), "temp");

export const ROOMS_COUNTS = [1, 2, 3];
