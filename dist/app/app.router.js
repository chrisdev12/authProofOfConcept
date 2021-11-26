"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_router_1 = __importDefault(require("../auth/auth.router"));
var healthCheck_router_1 = __importDefault(require("../healthCheck/healthCheck.router"));
var ServerRoutes = [
    {
        basePath: "/auth",
        moduleRouter: auth_router_1.default,
    },
    {
        basePath: "/health",
        moduleRouter: healthCheck_router_1.default,
    },
];
exports.default = ServerRoutes;
//# sourceMappingURL=app.router.js.map