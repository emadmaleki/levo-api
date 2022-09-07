const express = require('express');
const jsonServer = require("json-server");
const fileUpload = require('express-fileupload');
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const app = express();

server.use(middlewares);
server.use(router);
server.listen(port);
