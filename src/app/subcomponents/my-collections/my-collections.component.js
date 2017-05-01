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
var MyCollectionsComponent = (function () {
    function MyCollectionsComponent(appRouter, auth, dataService) {
        var _this = this;
        this.appRouter = appRouter;
        this.auth = auth;
        this.dataService = dataService;
        this.userUpdated = new core_1.EventEmitter();
        this.dataService.getCollections().subscribe(function (colls) { return _this.collections = colls; });
    }
    MyCollectionsComponent.prototype.onClick = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        this.currentCollectionName = idAttr.nodeValue;
        this.userUpdated.emit(this.currentCollectionName);
        localStorage.removeItem('appCurrentCollection');
        localStorage.setItem('appCurrentCollection', JSON.stringify(this.collections.find(function (x) { return _this.currentCollectionName === x.name; })));
        this.appRouter.navigateByUrl('dict');
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MyCollectionsComponent.prototype, "userUpdated", void 0);
    MyCollectionsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-collections',
            styleUrls: ['./my-collections.component.css'],
            templateUrl: './my-collections.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, collections_service_1.CollectionDataService])
    ], MyCollectionsComponent);
    return MyCollectionsComponent;
}());
exports.MyCollectionsComponent = MyCollectionsComponent;
//# sourceMappingURL=my-collections.component.js.map