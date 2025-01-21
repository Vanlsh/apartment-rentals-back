import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from "../constants/index.js";
import { FlatCollection } from "../db/models/flat.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";

export const getFlats = async (
  page = DEFAULT_PAGE,
  perPage = DEFAULT_PER_PAGE,
  filters = {}
) => {
  const { priceMin, priceMax, roomsCount } = filters;

  const query = {};
  if (priceMin !== undefined || priceMax !== undefined) {
    query.price = {};
    if (priceMin !== undefined) {
      query.price.$gte = priceMin;
    }
    if (priceMax !== undefined) {
      query.price.$lte = priceMax;
    }
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

export const getFlat = async (flatId) => {
  return await FlatCollection.findOne({
    _id: flatId,
  });
};

export const createFlat = async (payload) => {
  return FlatCollection.create(payload);
};

export const updateFlat = async (flatId, payload, options = {}) => {
  const flat = await FlatCollection.findOneAndUpdate({ _id: flatId }, payload, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });

  if (!flat || !flat.value) return null;

  return {
    flat: flat.value,
    isNew: Boolean(flat?.lastErrorObject?.upserted),
  };
};

export const deleteFlat = async (flatId) => {
  return FlatCollection.findOneAndDelete({
    _id: flatId,
  });
};
