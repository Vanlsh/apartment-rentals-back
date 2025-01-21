import {
  getFlats,
  getFlat,
  createFlat,
  updateFlat,
  deleteFlat,
} from "../services/flat.js";
import { parseFlatFilters } from "../utils/parseFilters.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";
import { saveFileToCloudinary } from "../utils/saveFileToCloudinary.js";

export const getFlatsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const filters = parseFlatFilters(req.query);


  const flats = await getFlats(page, perPage, filters);

  res.status(200).json({
    status: 200,
    message: "Successfully found flats!",
    data: flats,
  });
};

export const getFlatController = async (req, res) => {
  const { flatId } = req.params;

  const data = await getFlat(flatId);

  if (!data) {
    next(createHttpError(404, "Flat not found"));
    return;
  }

  res.status(200).json({
    status: 200,
    message: "Successfully found flat!",
    data,
  });
};

export const createFlatController = async (req, res) => {
  const photo = req.file;
  const data = { ...req.body };

  if (photo) {
    data.photo = await saveFileToCloudinary(photo);
  }

  const flat = await createFlat(data);

  res.status(201).json({
    status: 201,
    message: "Successfully created a flat!",
    data: flat,
  });
};

export const patchFlatController = async (req, res, next) => {
  const { flatId } = req.params;
  const photo = req.file;
  const data = { ...req.body };

  if (photo) {
    data.photo = await saveFileToCloudinary(photo);
  }

  const result = await updateFlat(flatId, data);

  if (!result) {
    next(createHttpError(404, "Flat not found"));
    return;
  }

  res.status(200).json({
    status: 200,
    message: "Successfully patched a flat!",
    data: result.flat,
  });
};

export const deleteFlatController = async (req, res, next) => {
  const { flatId } = req.params;

  const result = await deleteFlat(flatId);

  if (!result) {
    next(createHttpError(404, "Flat not found"));
    return;
  }

  res.status(204).send();
};
