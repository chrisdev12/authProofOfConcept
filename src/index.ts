import Server from "./app/startup";
import express from "express";
import cors from "cors";
import routes from "./app/app.router";
const generalMiddlewares = [cors({ origin: "*" }), express.json()];
const port = process.env.PORT || "";
const server = new Server(port, generalMiddlewares, routes);

server.init();
