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
var router_1 = require('@angular/router');
var auth_service_1 = require('../../services/auth.service');
var notifier_service_1 = require('../../services/notifier.service');
var SigninComponent = (function () {
    function SigninComponent(appRouter, auth, notifier) {
        this.appRouter = appRouter;
        this.auth = auth;
        this.notifier = notifier;
    }
    SigninComponent.prototype.signIn = function () {
        this.auth.logIn(this.username, this.password);
        if (!this.auth.isLogged()) {
            this.username = '';
            this.password = '';
            return;
        }
        else {
            this.notifier.wellcome(this.username);
            this.username = '';
            this.password = '';
            this.appRouter.navigateByUrl('home');
        }
    };
    SigninComponent.prototype.goRegister = function () {
        this.appRouter.navigateByUrl('sign-up');
    };
    SigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sign-in',
            styleUrls: ['./sign-in.component.css'],
            templateUrl: './sign-in.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, notifier_service_1.NotifierService])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=sign-in.component.js.map