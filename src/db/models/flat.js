import { model, Schema } from "mongoose";

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
      enum: [1, 2, 3],
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
