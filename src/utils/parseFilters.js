import { ROOMS_COUNTS } from "../constants/index.js";

const parseRoomCount = (unknown) => {
  if (ROOMS_COUNTS.includes(Number(unknown))) return unknown;
};

const parsePrice = (unknown) => {
  if (!Number.isNaN(unknown) && unknown >= 0) return unknown;
};

export const parseFlatFilters = (query) => {
  return {
    roomsCount: parseRoomCount(query.roomsCount),
    priceMin: parsePrice(query.priceMin),
    priceMax: parsePrice(query.priceMax),
  };
};
