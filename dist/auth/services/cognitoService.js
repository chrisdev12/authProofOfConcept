"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var amazon_cognito_identity_js_1 = require("amazon-cognito-identity-js");
require('dotenv').config();
var CognitoService = /** @class */ (function () {
    function CognitoService() {
        this.region = 'us-east-1';
        this.userPoolId = process.env.UserPoolID || "";
        this.clientId = process.env.ClientId || "";
        var poolData = {
            UserPoolId: this.userPoolId,
            ClientId: this.clientId,
        };
        this.provider = new amazon_cognito_identity_js_1.CognitoUserPool(poolData);
    }
    CognitoService.prototype.signUp = function (newUser) {
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
                console.log('user name is ' + cognitoUser.getUsername());
                return resolve(cognitoUser);
            });
        });
    };
    ;
    CognitoService.prototype.signIn = function (user) {
        var authDetails = new amazon_cognito_identity_js_1.AuthenticationDetails({
            Username: user.email,
            Password: user.password
        });
        var userData = {
            Username: user.email,
            Pool: this.provider
        };
        var cognitoUser = new amazon_cognito_identity_js_1.CognitoUser(userData);
        return new Promise(function (resolve, reject) {
            cognitoUser.authenticateUser(authDetails, {
                onSuccess: function (result) {
                    console.log('access token + ' + result.getAccessToken().getJwtToken());
                    console.log('id token + ' + result.getIdToken().getJwtToken());
                    console.log('refresh token + ' + result.getRefreshToken().getToken());
                    return resolve(result.getAccessToken().getJwtToken());
                },
                onFailure: function (err) {
                    console.log(err);
                    reject(err);
                },
            });
        });
    };
    return CognitoService;
}());
exports.default = CognitoService;
//# sourceMappingURL=cognitoService.js.map