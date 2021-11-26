"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseController = /** @class */ (function () {
    function BaseController() {
    }
    BaseController.prototype.successResponse = function (res, message, statusCode) {
        return res.status(statusCode || 200).json({
            error: false,
            success: message,
        });
    };
    BaseController.prototype.errorResponse = function (res, message, statusCode) {
        return res.status(statusCode || 500).json({
            error: message,
            success: false,
        });
    };
    return BaseController;
}());
exports.default = BaseController;
//# sourceMappingURL=base.controller.js.map