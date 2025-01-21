import { createFlat, getFlats } from "../services/flat.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";

export const getFlatsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);

  const flats = await getFlats(page, perPage);

  res.status(200).json({
    status: 200,
    message: "Successfully found flats!",
    data: flats,
  });
};

export const createFlatController = async (req, res) => {
  // const photo = req.file;

  // if (photo) {
  //   data.photo = await saveFileToCloudinary(photo);
  // }

  const flat = await createFlat(req.body);

  res.status(201).json({
    status: 201,
    message: "Successfully created a flat!",
    data: flat,
  });
};
