"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authToken_middleware_1 = __importDefault(require("../auth/middlewares/authToken.middleware"));
var cognitoJwtValidator_1 = __importDefault(require("../auth/services/cognitoJwtValidator"));
var healthCheck_controller_1 = __importDefault(require("./healthCheck.controller"));
var healthCheckRouter = (0, express_1.Router)();
var healthCheckController = new healthCheck_controller_1.default();
var cognitoJwtValidator = new cognitoJwtValidator_1.default();
var authToken = new authToken_middleware_1.default(cognitoJwtValidator);
healthCheckRouter.get("", healthCheckController.getOnlineServerMsg);
healthCheckRouter.post("/verifyToken", authToken.verify, healthCheckController.getOnlineServerMsg);
exports.default = healthCheckRouter;
//# sourceMappingURL=healthCheck.router.js.map