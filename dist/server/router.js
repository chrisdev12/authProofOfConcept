"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = __importDefault(require("../auth/controller"));
var authRoute = "/auth";
function serverRouter(app) {
    app.use(authRoute, controller_1.default);
    app.get('/', function (_, res) {
        res.send('Well done!');
    });
}
exports.default = serverRouter;
//# sourceMappingURL=router.js.map