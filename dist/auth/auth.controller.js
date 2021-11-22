"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_controller_1 = __importDefault(require("../server/base.controller"));
var cognitoService_1 = __importDefault(require("./services/cognitoService"));
var AuthController = /** @class */ (function (_super) {
    __extends(AuthController, _super);
    function AuthController(router) {
        var _this = _super.call(this, router) || this;
        _this.signUpResource = "/signUp";
        _this.routes = function () {
            _this.router.post(_this.signUpResource, function (req, res) {
                _this.authService
                    .signUp({ email: req.body.email, password: req.body.password })
                    .then(function (result) { return res.send(result); })
                    .catch(function (error) { return res.status(500).json({ error: error }); });
            });
            _this.router.get("", function (_, res) {
                return res.json({ g: 2324 });
            });
            return _this.router;
        };
        _this.authService = new cognitoService_1.default();
        return _this;
    }
    return AuthController;
}(base_controller_1.default));
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map