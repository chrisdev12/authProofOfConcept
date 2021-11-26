"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_controller_1 = __importDefault(require("./auth.controller"));
var authRouter = (0, express_1.Router)();
var authController = new auth_controller_1.default();
authRouter.post("/signup", authController.registerNewUser);
authRouter.post("/refresh", authController.refreshSession);
authRouter.post("", authController.login);
exports.default = authRouter;
//# sourceMappingURL=auth.router.js.map