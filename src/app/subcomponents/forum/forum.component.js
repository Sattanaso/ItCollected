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
var user_data_service_1 = require('../../services/user.data.service');
var auth_service_1 = require('../../services/auth.service');
var ForumComponent = (function () {
    function ForumComponent(auth, userData) {
        var _this = this;
        this.auth = auth;
        this.userData = userData;
        this.userData.getUsers().subscribe(function (x) { return _this.users = x; });
    }
    ForumComponent.prototype.onClick = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        this.idAttrUsername = target.attributes.id.nodeValue;
    };
    ForumComponent.prototype.pushMessage = function () {
        var msg = this.message;
        console.log(msg);
        // this.messages.push(msg);
        this.message = '';
    };
    ForumComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'forum',
            styleUrls: ['./forum.component.css'],
            templateUrl: './forum.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, user_data_service_1.UserDataService])
    ], ForumComponent);
    return ForumComponent;
}());
exports.ForumComponent = ForumComponent;
//# sourceMappingURL=forum.component.js.map