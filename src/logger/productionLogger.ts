const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }: any) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const productionLogger = () => {
  return createLogger({
    level: "info",
    format: combine(label({ label: "right meow!" }), timestamp(), myFormat),
    transports: [
      new transports.Console(),
      new transports.File({ filename: "production.log" }),
    ],
  });
};

export default productionLogger;
