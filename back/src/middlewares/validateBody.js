import createHttpError from "http-errors";

export const validateBody =
  (schema, isUpdate = false) =>
  async (req, res, next) => {
    try {
      await schema.validateAsync(req.body, {
        abortEarly: false,
        context: { isUpdate },
      });
      next();
    } catch (err) {
      const error = createHttpError(400, "Bad request", {
        errors: err.details,
      });
      next(error);
    }
  };
