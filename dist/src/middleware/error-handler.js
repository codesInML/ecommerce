"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
const http_status_codes_1 = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
    // log.error(err)
    let customError = {
        statusCode: err.statusCode || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message || "Something went wrong, please try again later",
    };
    return res
        .status(customError.statusCode)
        .json({ status: "failed", err: customError.message });
};
exports.errorHandlerMiddleware = errorHandlerMiddleware;
