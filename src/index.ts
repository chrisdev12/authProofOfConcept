import Server from './server/startup'
import express from 'express';
import cors from 'cors';
import routes from './server/routes';
const generalMiddlewares = [cors({ origin: '*' }), express.json()]
const port =  process.env.PORT || '';
const server = new Server(port, generalMiddlewares, routes);

server.init();