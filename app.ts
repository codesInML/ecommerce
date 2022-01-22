// configure the environment variables
require("dotenv").config({ path: "./app.env" });

global.__basedir = __dirname;

// for async errors
import "express-async-errors";

import express, { Application } from "express";
import routes from "./src/routes";

// security packages
import helmet from "helmet";
const xss = require("xss-clean");
import rateLimit from "express-rate-limit";

// initialize the express app
const app: Application = express();

// security middlewares
app.set("trust proxy", 1);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(xss());
app.use(rateLimit({ windowMs: 60 * 1000, max: 60 }));

// set the routes
app.use("/api/v1", routes);

export default app;
