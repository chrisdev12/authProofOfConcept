"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_controller_1 = __importDefault(require("../auth/auth.controller"));
var health_controller_1 = __importDefault(require("./health.controller"));
var ServerRoutes = [
    {
        basePath: "/auth",
        controller: new auth_controller_1.default()
    },
    {
        basePath: "/health",
        controller: new health_controller_1.default()
    }
];
exports.default = ServerRoutes;
//# sourceMappingURL=routes.js.map