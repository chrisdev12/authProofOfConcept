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
var base_controller_1 = __importDefault(require("./base.controller"));
var apiResponses_1 = require("./types/apiResponses");
var HealthCheckporintController = /** @class */ (function (_super) {
    __extends(HealthCheckporintController, _super);
    function HealthCheckporintController() {
        return _super.call(this) || this;
    }
    HealthCheckporintController.prototype.getRoutes = function () {
        this.router.get('', this.getHealthCheckpointMessage);
        return this.router;
    };
    ;
    HealthCheckporintController.prototype.getHealthCheckpointMessage = function (_, res) {
        return (0, apiResponses_1.successResponse)(res, "server working");
    };
    return HealthCheckporintController;
}(base_controller_1.default));
exports.default = HealthCheckporintController;
//# sourceMappingURL=health.controller.js.map