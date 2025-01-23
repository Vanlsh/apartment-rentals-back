import { z } from 'zod';

export const ACCEPTED_IMAGE_TYPES = new Set([
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
]);

export type FlatSchema = z.infer<typeof flatSchema>;

export const getDefaultFlatValues = (overrides: Partial<FlatSchema> = {}) => ({
  title: '',
  description: '',
  price: 0,
  roomsCount: 1,
  photo: '',
  ...overrides,
});

export const flatSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'Title must be at least 3 characters long.' })
    .max(90, { message: 'Title must not exceed 90 characters.' }),
  description: z
    .string()
    .max(335, { message: 'Description must not exceed 335 characters.' }),
  price: z.coerce
    .number({ invalid_type_error: 'Price should be a number.' })
    .min(1, { message: 'Price must be at least 1.' }),
  roomsCount: z.number(),
  photo: z
    .union([
      z.string(),
      z
        .instanceof(File, { message: 'Please select an image file.' })
        .refine(file => ACCEPTED_IMAGE_TYPES.has(file.type), {
          message:
            'Please upload a valid image file (JPG, JPEG, PNG, or WebP).',
        }),
    ])
    .nullable()
    .optional(),
});

export const roomOptions = [1, 2, 3];

export const flatFields = [
  {
    type: 'input',
    name: 'title',
    label: 'Title',
    required: true,
  },
  {
    type: 'input',
    name: 'price',
    label: 'Price',
    required: true,
  },
  {
    type: 'select',
    name: 'roomsCount',
    label: 'Count of rooms',
    required: true,
    options: roomOptions,
  },
  {
    type: 'textarea',
    name: 'description',
    label: 'Description',
    required: false,
  },
  {
    type: 'photo',
    name: 'photo',
    label: 'Photo',
    required: false,
    acceptedFormats: ['.jpg', '.jpeg', '.png', '.webp'],
  },
] as const;

// FILTER
export type FilterSchema = z.infer<typeof filterSchema>;

export const getFilterValues = (overrides: Partial<FilterSchema> = {}) => ({
  priceMin: null,
  priceMax: null,
  roomsCount: null,
  ...overrides,
});

export const filterSchema = z
  .object({
    priceMin: z.coerce
      .number({ invalid_type_error: 'Should be a number' })
      .transform(val => val || null)
      .nullable(),
    priceMax: z.coerce
      .number({ invalid_type_error: 'Should be a number' })
      .transform(val => val || null)
      .nullable(),
    roomsCount: z.number().nullable(),
  })
  .refine(
    data => {
      if (data.priceMin && data.priceMax) {
        return Number(data.priceMin) <= Number(data.priceMax);
      }
      return true;
    },
    {
      message: 'Minimum price must be less or equal to maximum price',
      path: ['priceMin'],
    },
  );

export const filterFiled = [
  {
    type: 'input',
    name: 'priceMin',
    label: 'Min price',
  },
  {
    type: 'input',
    name: 'priceMax',
    label: 'Max price',
  },
  {
    type: 'select',
    name: 'roomsCount',
    label: 'Count of rooms',
    options: roomOptions,
  },
] as const;
