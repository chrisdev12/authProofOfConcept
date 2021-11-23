"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require('dotenv').config();
var Server = /** @class */ (function () {
    /**
     * @param port Port Application listens on
     * @param middleware Array of middleware to be applied to app
     * @param routes Array of express.Router objects for application routes
     */
    function Server(port, middlewares, routes) {
        this.port = port;
        this.app = (0, express_1.default)();
        this.setUpMiddlewares(middlewares);
        this.setUpRoutes(routes);
    }
    Server.prototype.setUpMiddlewares = function (mware) {
        var _this = this;
        mware.forEach(function (middleware) { return _this.app.use(middleware); });
    };
    Server.prototype.setUpRoutes = function (routes) {
        var _this = this;
        routes.forEach(function (resource) {
            return _this.app.use(resource.basePath, resource.controller.getRoutes());
        });
    };
    Server.prototype.init = function () {
        this.app.listen(this.port, function () {
            console.log("The application is listening on port " + process.env.PORT);
        });
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=startup.js.map