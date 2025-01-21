import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from "../constants/index.js";
import { FlatCollection } from "../db/models/flat.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";

export const getFlats = async (
  page = DEFAULT_PAGE,
  perPage = DEFAULT_PER_PAGE,
  filters = {}
) => {
  const { price, roomsCount } = filters;

  const query = {};
  if (price) {
    query.price = { $lte: price };
  }
  if (roomsCount) {
    query.roomsCount = roomsCount;
  }

  const flats = await FlatCollection.find(query)
    .skip((page - 1) * perPage)
    .limit(perPage)
    .exec();

  const totalFlats = await FlatCollection.countDocuments(query);

  const paginationData = calculatePaginationData(totalFlats, perPage, page);

  return {
    ...paginationData,
    data: flats,
  };
};

export const createFlat = async (payload) => {
  return FlatCollection.create(payload);
};
