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
var user_data_service_1 = require('./user.data.service');
var notifier_service_1 = require('./notifier.service');
var hashing_service_1 = require('./hashing.service');
var index_js_1 = require('./local-storage/index.js');
var AuthService = (function () {
    function AuthService(userData, notifier, localStorage, hash) {
        var _this = this;
        this.userData = userData;
        this.notifier = notifier;
        this.localStorage = localStorage;
        this.hash = hash;
        this.isUserLogged = false;
        this.userData.getUsers().subscribe(function (usrs) { return _this.users = usrs; });
    }
    AuthService.prototype.isLogged = function () {
        return localStorage.getItem('itCollectedUsername') ? true : false;
    };
    AuthService.prototype.getUsername = function () {
        if (this.isLogged()) {
            return localStorage.getItem('itCollectedUsername');
        }
    };
    AuthService.prototype.registrate = function (user) {
        var _this = this;
        user.passWord = this.hash.generateHash(user.passWord);
        this.userData.postUser(user).subscribe(function (newUser) {
            _this.users.push(user);
            localStorage.setItem('itCollectedUsername', user.userName);
            _this.isUserLogged = true;
        });
    };
    AuthService.prototype.logIn = function (username, password) {
        password = this.hash.generateHash(password);
        if (!(this.users.find(function (user) { return (user.userName === username) && (user.passWord === password); }))) {
            this.notifier.wrongUsernameOrPassword();
            return;
        }
        ;
        localStorage.setItem('itCollectedUsername', username);
        this.isUserLogged = true;
    };
    AuthService.prototype.logOut = function () {
        localStorage.removeItem('itCollectedUsername');
        localStorage.removeItem('appCurrentCollection');
        this.isUserLogged = false;
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [user_data_service_1.UserDataService, notifier_service_1.NotifierService, index_js_1.LocalStorageService, hashing_service_1.HashingService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map