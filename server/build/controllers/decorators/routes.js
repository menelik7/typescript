"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.post = exports.put = exports.get = exports.routeFinder = void 0;
require("reflect-metadata");
const Methods_1 = require("./Methods");
function routeFinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata("path", path, target, key);
            Reflect.defineMetadata("method", method, target, key);
        };
    };
}
exports.routeFinder = routeFinder;
exports.get = routeFinder(Methods_1.Methods.get);
exports.put = routeFinder(Methods_1.Methods.put);
exports.post = routeFinder(Methods_1.Methods.post);
exports.del = routeFinder(Methods_1.Methods.del);
exports.patch = routeFinder(Methods_1.Methods.patch);
