"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_controller_1 = __importDefault(require("../auth/auth.controller"));
var router = (0, express_1.Router)();
var ServerRoutes = [
    {
        basePath: "/auth",
        controller: new auth_controller_1.default(router)
    }
];
exports.default = ServerRoutes;
//# sourceMappingURL=routes.js.map