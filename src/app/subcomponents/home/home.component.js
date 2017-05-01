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
var HomeComponent = (function () {
    function HomeComponent(auth, router, dataService) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.dataService = dataService;
        this.userUpdated = new core_1.EventEmitter();
        this.dataService.getCollections().subscribe(function (colls) { return _this.collections = colls.slice(0, 3); });
    }
    HomeComponent.prototype.onClick = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        this.currentCollectionName = idAttr.nodeValue;
        this.userUpdated.emit(this.currentCollectionName);
        localStorage.removeItem('appCurrentCollection');
        localStorage.setItem('appCurrentCollection', JSON.stringify(this.collections.find(function (x) { return _this.currentCollectionName === x.name; })));
        this.router.navigateByUrl('dict');
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HomeComponent.prototype, "userUpdated", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            styleUrls: ['./home.component.css'],
            templateUrl: './home.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router, collections_service_1.CollectionDataService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map