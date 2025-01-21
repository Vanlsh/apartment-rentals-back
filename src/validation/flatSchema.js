import Joi from "joi";

export const flatSchema = Joi.object({
  title: Joi.string()
    .when("$isUpdate", {
      is: false,
      then: Joi.required(),
    })
    .max(90)
    .messages({
      "string.empty": "Title is required.",
      "string.max": "Title cannot exceed 90 characters.",
    }),
  description: Joi.string()
    .max(335)
    .when("$isUpdate", {
      is: false,
      then: Joi.optional(),
    })
    .messages({
      "string.max": "Description cannot exceed 335 characters.",
    }),
  price: Joi.number()
    .min(0)
    .when("$isUpdate", {
      is: false,
      then: Joi.required(),
    })
    .messages({
      "number.base": "Price must be a valid number.",
      "number.min": "Price cannot be less than 0.",
      "any.required": "Price is required.",
    }),
  roomsCount: Joi.number()
    .valid(1, 2, 3)
    .when("$isUpdate", {
      is: false,
      then: Joi.required(),
    })
    .messages({
      "any.only": "Rooms count must be one of 1, 2, or 3.",
      "any.required": "Rooms count is required.",
    }),
  photo: Joi.string().uri().optional().messages({
    "string.uri": "Photo must be a valid URL.",
  }),
}).when("$isUpdate", {
  is: true,
  then: Joi.object().min(1),
});
