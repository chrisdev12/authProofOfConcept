"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cognitoService_1 = __importDefault(require("./services/cognitoService"));
var cognitoService = new cognitoService_1.default();
var router = (0, express_1.Router)();
var signUpResource = "/signUp";
router.post(signUpResource, function (req, res) {
    cognitoService.signUp({ email: req.body.email, password: req.body.password })
        .then(function (result) { return res.send(result); })
        .catch(function (err) { return res.sendStatus(500); });
});
exports.default = router;
//# sourceMappingURL=controller.js.map