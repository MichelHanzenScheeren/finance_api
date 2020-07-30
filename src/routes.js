const express = require("express");
const routes = express.Router();
const about = require("./about");
const finance = require("./api");

routes.get(["/", "/index", "/home"], about.index);

routes.get("/author", about.author);

routes.get("/search", finance.search);

routes.get("/historical_data", finance.getHistoricalData);

module.exports = routes;