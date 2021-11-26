"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
var amazon_cognito_identity_js_1 = require("amazon-cognito-identity-js");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var CognitoService = /** @class */ (function () {
    function CognitoService() {
        this.userPoolId = process.env.UserPoolID || "";
        this.clientId = process.env.ClientId || "";
        var poolData = {
            UserPoolId: this.userPoolId,
            ClientId: this.clientId,
        };
        this.provider = new amazon_cognito_identity_js_1.CognitoUserPool(poolData);
    }
    CognitoService.prototype.register = function (newUser) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.provider.signUp(newUser.email, newUser.password, [], [], function (err, result) {
                if (err) {
                    console.log(err);
                    return reject(err);
                }
                var cognitoUser = result.user;
                console.log(result);
                console.log(cognitoUser);
                console.log("user name is " + cognitoUser.getUsername());
                return resolve(cognitoUser);
            });
        });
    };
    CognitoService.prototype.login = function (user) {
        var authDetails = new amazon_cognito_identity_js_1.AuthenticationDetails({
            Username: user.email,
            Password: user.password,
        });
        var userData = {
            Username: user.email,
            Pool: this.provider,
        };
        var cognitoUser = new amazon_cognito_identity_js_1.CognitoUser(userData);
        return new Promise(function (resolve, reject) {
            cognitoUser.authenticateUser(authDetails, {
                onSuccess: function (result) {
                    var authSession = {
                        accessToken: result.getAccessToken().getJwtToken(),
                        refreshToken: result.getRefreshToken().getToken(),
                        idToken: result.getIdToken().getJwtToken(),
                    };
                    return resolve(authSession);
                },
                onFailure: function (err) { return reject(err); },
            });
        });
    };
    CognitoService.prototype.refreshSession = function (refreshRequest) {
        var refreshToken = new amazon_cognito_identity_js_1.CognitoRefreshToken({
            RefreshToken: refreshRequest.refreshToken,
        });
        var userData = {
            Username: refreshRequest.email,
            Pool: this.provider,
        };
        var cognitoUser = new amazon_cognito_identity_js_1.CognitoUser(userData);
        return new Promise(function (resolve, reject) {
            cognitoUser.refreshSession(refreshToken, function (err, session) {
                if (err)
                    return reject(err);
                var authSession = {
                    accessToken: session.accessToken.jwtToken,
                    idToken: session.idToken.jwtToken,
                    refreshToken: session.refreshToken.token,
                };
                return resolve(authSession);
            });
        });
    };
    return CognitoService;
}());
exports.default = CognitoService;
//# sourceMappingURL=cognitoService.js.map