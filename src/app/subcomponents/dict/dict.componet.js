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
var notifier_service_1 = require('../../services/notifier.service');
var creator_service_1 = require('../../services/creator.service');
var auth_service_1 = require('../../services/auth.service');
var collections_service_1 = require('../../services/collections.service');
var index_1 = require('../../services/local-storage/index');
var DictComponent = (function () {
    function DictComponent(localStorage, notifier, creator, auth, appRouter, collectionData) {
        var _this = this;
        this.localStorage = localStorage;
        this.notifier = notifier;
        this.creator = creator;
        this.auth = auth;
        this.appRouter = appRouter;
        this.collectionData = collectionData;
        this.userUpdated = new core_1.EventEmitter();
        this.currentMember = {
            title: '.',
            description: '...',
            imageUrl: '',
            collectionName: '',
            audio: '',
            video: '',
            info: ''
        };
        this.collectionData.getCollections().subscribe(function (colls) { return _this.currCollections = colls; });
    }
    DictComponent.prototype.getCurrentCollection = function () {
        return JSON.parse(localStorage.getItem('appCurrentCollection'));
    };
    DictComponent.prototype.onClick = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id.nodeValue;
        this.currentMember = this.getCurrentCollection().members.find(function (x) { return ((x.title === idAttr)); });
    };
    DictComponent.prototype.isMyProtected = function () {
        return !this.getCurrentCollection().isProtected ||
            (this.getCurrentCollection().isProtected &&
                (this.auth.getUsername() === this.getCurrentCollection().owner));
    };
    DictComponent.prototype.addItem = function () {
        var _this = this;
        this.newMember = this.creator.createCollectionMember(this.getCurrentCollection().name);
        this.newMember.title = this.title;
        this.newMember.description = this.description;
        this.newMember.imageUrl = this.imgUrl;
        this.newMember.audio = this.audio;
        this.newMember.video = this.video;
        this.newMember.id = this.getCurrentCollection()._id;
        this.collectionData.updateCollection(this.newMember).subscribe(function (msg) { return _this.notifier.itemAdded(); });
        this.appRouter.navigateByUrl('all-collections');
    };
    DictComponent.prototype.editItem = function () {
        var _this = this;
        this.newMember = this.creator.createCollectionMember(this.getCurrentCollection().name);
        this.newMember.title = this.currentMember.title;
        this.newMember.description = this.description;
        this.newMember.imageUrl = this.imgUrl;
        this.newMember.tag = 'edit';
        this.newMember.id = this.getCurrentCollection()._id;
        this.collectionData.updateCollection(this.newMember).subscribe(function (msg) { return _this.notifier.itemEdited(); });
        this.appRouter.navigateByUrl('all-collections');
    };
    DictComponent.prototype.deleteItem = function () {
        var _this = this;
        this.currentMember.tag = 'delete';
        this.collectionData.updateCollection(this.currentMember).subscribe(function (msg) { return _this.notifier.itemDeleted(); });
        this.appRouter.navigateByUrl('all-collections');
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DictComponent.prototype, "userUpdated", void 0);
    DictComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dict',
            styleUrls: ['./dict.component.css'],
            templateUrl: './dict.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.LocalStorageService, notifier_service_1.NotifierService, creator_service_1.CreatorService, auth_service_1.AuthService, router_1.Router, collections_service_1.CollectionDataService])
    ], DictComponent);
    return DictComponent;
}());
exports.DictComponent = DictComponent;
//# sourceMappingURL=dict.componet.js.map