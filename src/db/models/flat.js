import { model, Schema } from "mongoose";
import { ROOMS_COUNTS } from "../../constants/index.js";

const flatSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 90,
    },
    description: {
      type: String,
      required: true,
      maxlength: 335,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    roomsCount: {
      type: Number,
      required: true,
      enum: ROOMS_COUNTS,
    },
    photo: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const FlatCollection = model("flat", flatSchema);
