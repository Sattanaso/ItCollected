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
var collections_service_1 = require('../../services/collections.service');
var auth_service_1 = require('../../services/auth.service');
var user_data_service_1 = require('../../services/user.data.service');
var ProfileComponent = (function () {
    function ProfileComponent(appRouter, auth, userDataService, dataService) {
        this.appRouter = appRouter;
        this.auth = auth;
        this.userDataService = userDataService;
        this.dataService = dataService;
        this.username = 'Username';
        this.email = 'E-mail';
        this.backgroundImageUrl = 'https://image.freepik.com/free-photo/blue-surface-with-creases_1160-191.jpg';
        this.avatarImageUrl = '../../../assets/images/emptyProfile.jpg';
        this.userUpdated = new core_1.EventEmitter();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getCollections().subscribe(function (colls) { return _this.collections = colls; });
        this.userDataService.getUserByUsername(this.auth.getUsername()).subscribe(function (x) { return _this.currentUser = x; });
    };
    ProfileComponent.prototype.getUsername = function () {
        this.username = this.currentUser.userName;
        this.email = this.currentUser.profile.eMail;
        this.avatarImageUrl = this.currentUser.profile.imageUrl;
    };
    ProfileComponent.prototype.onClick = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        this.currentCollectionName = idAttr.nodeValue;
        this.userUpdated.emit(this.currentCollectionName);
        localStorage.removeItem('appCurrentCollection');
        localStorage.setItem('appCurrentCollection', JSON.stringify(this.collections.find(function (x) { return _this.currentCollectionName === x.name; })));
        this.appRouter.navigateByUrl('dict');
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ProfileComponent.prototype, "userUpdated", void 0);
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profile',
            styleUrls: ['./profile.component.css'],
            templateUrl: './profile.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, user_data_service_1.UserDataService, collections_service_1.CollectionDataService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map