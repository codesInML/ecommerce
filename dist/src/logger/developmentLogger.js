"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
const productionLogger = () => {
    return createLogger({
        level: "info",
        format: combine(format.colorize(), label({ label: "right meow!" }), timestamp({ format: "HH:mm:ss" }), myFormat),
        transports: [
            new transports.Console(),
            new transports.File({ filename: "production.log" }),
        ],
    });
};
exports.default = productionLogger;
