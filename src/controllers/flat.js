export const getFlatController = async (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Success",
    data: { message: "Success" },
  });
};
