"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var md5_js_1 = require('ts-md5/dist/md5.js');
var HashingService = (function () {
    function HashingService() {
    }
    HashingService.prototype.generateHash = function (value) {
        return md5_js_1.Md5.hashAsciiStr(value).toString();
    };
    HashingService.prototype.generateDoubleHash = function (value) {
        var initialHash = md5_js_1.Md5.hashAsciiStr(value).toString();
        return md5_js_1.Md5.hashAsciiStr(initialHash).toString();
    };
    HashingService.prototype.generateTripleHash = function (value) {
        var initialHash = md5_js_1.Md5.hashAsciiStr(value).toString();
        var secondaryHash = md5_js_1.Md5.hashAsciiStr(initialHash).toString();
        return md5_js_1.Md5.hashAsciiStr(secondaryHash).toString();
    };
    HashingService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HashingService);
    return HashingService;
}());
exports.HashingService = HashingService;
//# sourceMappingURL=hashing.service.js.map