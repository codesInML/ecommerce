import { ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

export const errorHandlerMiddleware: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  // log.error(err)
  let customError: {
    statusCode: number;
    message: string;
  } = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Something went wrong, please try again later",
  };

  return res
    .status(customError.statusCode)
    .json({ status: "failed", err: customError.message });
};
