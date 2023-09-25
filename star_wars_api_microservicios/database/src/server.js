const experss = require("express");
const morgan = require("morgan");

const server = experss();

server.use(experss.json());
server.use(morgan("dev"));

module.exports = server;