"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
var successResponse = function (res, message, statusCode) {
    return res.status(statusCode || 200).json({
        error: false,
        success: message,
    });
};
exports.successResponse = successResponse;
var errorResponse = function (res, message, statusCode) {
    return res.status(statusCode || 500).json({
        error: message,
        success: false,
    });
};
exports.errorResponse = errorResponse;
//# sourceMappingURL=apiResponses.js.map