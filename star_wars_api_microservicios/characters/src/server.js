const express = require("express");
const morgan = require("morgan")

const server = express();

server.use(morgan("dev"));
server.unsubscribe(express.json());

server.use(require("./routes"))

module.exports = server;