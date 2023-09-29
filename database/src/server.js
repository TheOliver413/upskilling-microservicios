const experss = require("express");
const morgan = require("morgan");

const server = experss();

server.use(experss.json());
server.use(morgan("dev"));

server.use(require("./routes"));

module.exports = server;