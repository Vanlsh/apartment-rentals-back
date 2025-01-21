import multer from "multer";
import { TEMP_UPLOAD_DIR } from "../constants/index.js";

const storage = multer.diskStorage({
  destination: function (_, __, cb) {
    cb(null, TEMP_UPLOAD_DIR);
  },
  filename: function (_, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, `${uniqueSuffix}_${file.originalname}`);
  },
});

export const upload = multer({ storage });
