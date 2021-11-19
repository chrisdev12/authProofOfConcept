"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var startup_1 = __importDefault(require("./server/startup"));
var assert_1 = __importDefault(require("assert"));
require('dotenv').config();
assert_1.default.ok(process.env.PORT, "port isn't provided");
startup_1.default.listen(process.env.PORT, function () {
    console.log("The application is listening on port " + process.env.PORT);
});
//# sourceMappingURL=index.js.map