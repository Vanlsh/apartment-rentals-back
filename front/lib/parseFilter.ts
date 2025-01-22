import { FlatFilters } from "@/types/flat";
import { z } from "zod";

const pageSchema = z
  .string()
  .regex(/^\d+$/, "Page must be a positive number")
  .transform((val) => parseInt(val, 10));

const roomsCountSchema = z
  .string()
  .regex(/^[1-3]$/, "Rooms count must be 1, 2, or 3")
  .transform((val) => parseInt(val, 10))
  .optional();

const priceSchema = z
  .string()
  .regex(/^\d+(\.\d+)?$/, "Price must be a valid number")
  .transform((val) => parseFloat(val))
  .optional();

export interface FlatParsedFilters {
  page: number;
  perPage: number;
  roomsCount?: number;
  priceMin?: number;
  priceMax?: number;
}

export const parseFilters = (filters: FlatFilters) => {
  const parsedFilters: FlatParsedFilters = { page: 1, perPage: 10 };

  const pageResult = pageSchema.safeParse(filters.page);
  if (pageResult.success) {
    parsedFilters.page = pageResult.data;
  }

  const perPageResult = pageSchema.safeParse(filters.limit);
  if (perPageResult.success) {
    parsedFilters.perPage = perPageResult.data;
  }

  const roomsCountResult = roomsCountSchema.safeParse(filters.roomsCount);
  if (roomsCountResult.success) {
    parsedFilters.roomsCount = roomsCountResult.data;
  }

  const priceMinResult = priceSchema.safeParse(filters.priceMin);
  if (priceMinResult.success) {
    parsedFilters.priceMin = priceMinResult.data;
  }

  const priceMaxResult = priceSchema.safeParse(filters.priceMax);
  if (priceMaxResult.success) {
    parsedFilters.priceMax = priceMaxResult.data;
  }

  return parsedFilters;
};
