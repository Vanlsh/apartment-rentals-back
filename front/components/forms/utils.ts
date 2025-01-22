import { z } from "zod";

export const ACCEPTED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
]);

export type FlatSchema = z.infer<typeof flatSchema>;

export const getDefaultFlatValues = (overrides: Partial<FlatSchema> = {}) => ({
  title: "",
  description: "",
  price: 0,
  roomsCount: 1,
  photo: "",
  ...overrides,
});

export const flatSchema = z.object({
  title: z.string().min(3).max(90),
  description: z.string().max(335),
  price: z.coerce.number({ invalid_type_error: "Should be a number" }).min(1),
  roomsCount: z.number(),
  photo: z
    .union([
      z.string(),
      z
        .instanceof(File, { message: "Будь ласка, виберіть файл зображення." })
        .refine((file) => ACCEPTED_IMAGE_TYPES.has(file.type), {
          message:
            "Будь ласка, завантажте дійсний файл зображення (JPG, JPEG, PNG або WebP).",
        }),
    ])
    .nullable()
    .optional(),
});

export const roomOptions = [1, 2, 3];

export const flatFields = [
  {
    type: "input",
    name: "title",
    label: "Title",
    required: true,
  },
  {
    type: "textarea",
    name: "description",
    label: "Description",
    required: false,
  },
  {
    type: "input",
    name: "price",
    label: "Price",
    required: true,
  },
  {
    type: "select",
    name: "roomsCount",
    label: "Count of rooms",
    required: true,
    options: roomOptions,
  },
  {
    type: "photo",
    name: "photo",
    label: "Photo",
    required: false,
    acceptedFormats: [".jpg", ".jpeg", ".png", ".webp"],
  },
] as const;
