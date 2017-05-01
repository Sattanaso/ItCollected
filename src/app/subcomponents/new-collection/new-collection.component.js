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
var creator_service_1 = require('../../services/creator.service');
var collections_service_1 = require('../../services/collections.service');
var constants_1 = require('../../utils/constants');
var NewCollectionComponent = (function () {
    function NewCollectionComponent(auth, notifier, creator, appRouter, conz, collectionData) {
        var _this = this;
        this.auth = auth;
        this.notifier = notifier;
        this.creator = creator;
        this.appRouter = appRouter;
        this.conz = conz;
        this.collectionData = collectionData;
        this.collectionStatus = 'public';
        this.collectionData.getCollections().subscribe(function (colls) { _this.collections = colls; });
    }
    NewCollectionComponent.prototype.addNewCollection = function () {
        var _this = this;
        var owner = this.auth.getUsername();
        this.collectionNew = this.creator.createCollection(owner);
        this.collectionNew.name = this.collectionName;
        if ((this.collections.find(function (coll) {
            return (coll.name === _this.collectionNew.name);
        }))) {
            this.notifier.collectionAlreadyExists();
            return;
        }
        ;
        this.collectionNew.description = this.collectionDescription;
        this.collectionNew.imageUrl = this.collectionImageUrl;
        // console.log(this.collectionStatus);
        switch (this.collectionStatus) {
            case 'public':
                this.collectionNew.isPrivate = false;
                this.collectionNew.isProtected = false;
                break;
            case 'private':
                this.collectionNew.isPrivate = true;
                this.collectionNew.isProtected = false;
                break;
            case 'protected':
                this.collectionNew.isPrivate = false;
                this.collectionNew.isProtected = true;
                break;
        }
        this.collectionData.postCollection(this.collectionNew).subscribe(function (newCollection) {
            _this.collections.push(_this.collectionNew);
        });
        this.notifier.collectionAdded();
        this.appRouter.navigateByUrl('home');
        this.collectionName = '';
        this.collectionDescription = '';
        this.collectionImageUrl = '';
    };
    NewCollectionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'new-collection',
            styleUrls: ['./new-collection.component.css'],
            templateUrl: './new-collection.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, notifier_service_1.NotifierService, creator_service_1.CreatorService, router_1.Router, constants_1.Constantz, collections_service_1.CollectionDataService])
    ], NewCollectionComponent);
    return NewCollectionComponent;
}());
exports.NewCollectionComponent = NewCollectionComponent;
//# sourceMappingURL=new-collection.component.js.map