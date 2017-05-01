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
var user_data_service_1 = require('../../services/user.data.service');
var creator_service_1 = require('../../services/creator.service');
var validator_service_1 = require('../../services/validator.service');
var notifier_service_1 = require('../../services/notifier.service');
var auth_service_1 = require('../../services/auth.service');
var SignupComponent = (function () {
    function SignupComponent(userData, creator, validator, notifier, auth, appRouter) {
        this.userData = userData;
        this.creator = creator;
        this.validator = validator;
        this.notifier = notifier;
        this.auth = auth;
        this.appRouter = appRouter;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userData.getUsers().subscribe(function (allUsers) { return _this.allUsers = allUsers; });
    };
    SignupComponent.prototype.signup = function () {
        if (this.validator.passwordsNotSame(this.password, this.passwordConfirm)) {
            this.notifier.passwordsNotSame();
            return;
        }
        ;
        this.newUser = this.creator.createUser(this.username, this.image, this.password, this.email);
        this.auth.registrate(this.newUser);
        this.appRouter.navigateByUrl('home');
        this.notifier.wellcome(this.username);
        this.username = '';
        this.password = '';
        this.passwordConfirm = '';
        this.email = '';
    };
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sign-up',
            styleUrls: ['./sign-up.component.css'],
            templateUrl: './sign-up.component.html'
        }), 
        __metadata('design:paramtypes', [user_data_service_1.UserDataService, creator_service_1.CreatorService, validator_service_1.ValidatorService, notifier_service_1.NotifierService, auth_service_1.AuthService, router_1.Router])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=sign-up.component.js.map