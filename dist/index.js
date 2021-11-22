"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var startup_1 = __importDefault(require("./server/startup"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./server/routes"));
var generalMiddlewares = [(0, cors_1.default)({ origin: '*' }), express_1.default.json()];
var port = process.env.PORT || '';
var server = new startup_1.default(port, generalMiddlewares, routes_1.default);
server.init();
//# sourceMappingURL=index.js.map