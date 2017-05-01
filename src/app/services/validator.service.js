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
var constants_1 = require('../utils/constants');
var ValidatorService = (function () {
    function ValidatorService(constantz) {
        this.constantz = constantz;
    }
    ValidatorService.prototype.stringLenghtNotInRange = function (value, min, max) {
        if (value.length < min || value.length > max) {
            return true;
        }
        return false;
    };
    ValidatorService.prototype.stringNotContainIllicitChars = function (value) {
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var ch = value_1[_i];
            if (ch === '@' ||
                ch === '#' ||
                ch === '!' ||
                ch === '?') {
                return false;
            }
        }
        return true;
    };
    ValidatorService.prototype.stringsNotSame = function (p, pC) {
        if (p !== pC) {
            return true;
        }
        return false;
    };
    ValidatorService.prototype.stringExistsInCollection = function (collection, value) {
        if (collection.indexOf(value) !== -1) {
            return true;
        }
        return false;
    };
    // ====================================================================
    ValidatorService.prototype.usernameNotInRange = function (username) {
        return this.stringLenghtNotInRange(username, this.constantz.MinUsernameLenght, this.constantz.MaxUsernameLenght);
    };
    ValidatorService.prototype.passwordNotInRange = function (password) {
        return this.stringLenghtNotInRange(password, this.constantz.MinPasswordLenght, this.constantz.MaxPasswordLenght);
    };
    ValidatorService.prototype.passwordsNotSame = function (password, passwordConfirm) {
        return this.stringsNotSame(password, passwordConfirm);
    };
    ValidatorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [constants_1.Constantz])
    ], ValidatorService);
    return ValidatorService;
}());
exports.ValidatorService = ValidatorService;
//# sourceMappingURL=validator.service.js.map