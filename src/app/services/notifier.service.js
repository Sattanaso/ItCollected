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
var angular2_toastr_1 = require('angular2-toastr');
var NotifierService = (function () {
    function NotifierService(notifier) {
        this.notifier = notifier;
    }
    NotifierService.prototype.wellcome = function (username) {
        return this.notifier.success("Wellcome, " + username + "!", '', false, 2000);
    };
    NotifierService.prototype.itemAdded = function () {
        return this.notifier.success('Item added!', '', false, 2000);
    };
    NotifierService.prototype.itemEdited = function () {
        return this.notifier.success('Item edited!', '', false, 2000);
    };
    NotifierService.prototype.itemDeleted = function () {
        return this.notifier.warning('Item deleted!', '', false, 2000);
    };
    NotifierService.prototype.pleaseSignIn = function () {
        return this.notifier.warning('Sign in, please!', '', false, 2000);
    };
    NotifierService.prototype.collectionAdded = function () {
        return this.notifier.success('Success', 'Collection created!', false, 2000);
    };
    NotifierService.prototype.collectionAlreadyExists = function () {
        return this.notifier.error('Error', 'This collection already exists!', false, 2000);
    };
    NotifierService.prototype.passwordsNotSame = function () {
        return this.notifier.error('Error', 'Passwords are not the same!', false, 2000);
    };
    NotifierService.prototype.wrongUsernameOrPassword = function () {
        return this.notifier.error('Error', 'Wrong username or password!', false, 2000);
    };
    NotifierService.prototype.usernameNotInRange = function () {
        return this.notifier.error('Error', 'Username must be between 3 and 13 characters long!!', false, 2000);
    };
    NotifierService.prototype.passwordNotInRange = function () {
        return this.notifier.error('Error', 'Password must be between 6 and 36 characters long!!', false, 2000);
    };
    NotifierService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_toastr_1.ToasterService])
    ], NotifierService);
    return NotifierService;
}());
exports.NotifierService = NotifierService;
//# sourceMappingURL=notifier.service.js.map