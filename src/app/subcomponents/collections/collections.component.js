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
var collections_service_1 = require('../../services/collections.service');
var index_1 = require('../../services/local-storage/index');
var CollectionsComponent = (function () {
    function CollectionsComponent(auth, appRouter, localStorage, collectionService) {
        var _this = this;
        this.auth = auth;
        this.appRouter = appRouter;
        this.localStorage = localStorage;
        this.collectionService = collectionService;
        this.userUpdated = new core_1.EventEmitter();
        this.collectionService.getCollections().subscribe(function (colls) { _this.collections = colls; });
    }
    CollectionsComponent.prototype.onClick = function (event) {
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
    ], CollectionsComponent.prototype, "userUpdated", void 0);
    CollectionsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'collections',
            styleUrls: ['./collections.component.css'],
            templateUrl: './collections.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router, index_1.LocalStorageService, collections_service_1.CollectionDataService])
    ], CollectionsComponent);
    return CollectionsComponent;
}());
exports.CollectionsComponent = CollectionsComponent;
//# sourceMappingURL=collections.component.js.map