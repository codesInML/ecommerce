"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// configure the environment variables
require("dotenv").config({ path: "./app.env" });
global.__basedir = __dirname;
// for async errors
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./src/routes"));
// security packages
const helmet_1 = __importDefault(require("helmet"));
const xss = require("xss-clean");
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
// initialize the express app
const app = (0, express_1.default)();
// security middlewares
app.set("trust proxy", 1);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, helmet_1.default)());
app.use(xss());
app.use((0, express_rate_limit_1.default)({ windowMs: 60 * 1000, max: 60 }));
// set the routes
app.use("/api/v1", routes_1.default);
exports.default = app;
