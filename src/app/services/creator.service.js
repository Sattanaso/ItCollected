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
var user_model_1 = require('./../models/user.model');
var profile_model_1 = require('./../models/profile.model');
var collection_model_1 = require('./../models/collection.model');
var collection_member_model_1 = require('./../models/collection-member.model');
var constants_1 = require('../utils/constants');
var CreatorService = (function () {
    function CreatorService(constz) {
        this.constz = constz;
    }
    CreatorService.prototype.createUser = function (username, image, hashedPassword, email) {
        var profile = new profile_model_1.Profile();
        profile.eMail = email;
        profile.collections = [];
        profile.imageUrl = image || this.constz.AvatarDefaultUrl;
        var user = new user_model_1.User();
        user.creationDate = new Date();
        user.userName = username;
        user.passWord = hashedPassword;
        user.profile = profile;
        return user;
    };
    CreatorService.prototype.createCollection = function (username) {
        var collection = new collection_model_1.Collection();
        collection.imageUrl = this.constz.ImageDefaultUrl;
        collection.owner = username;
        collection.creationDate = new Date();
        collection.isProtected = true;
        collection.isPrivate = false;
        collection.members = [];
        return collection;
    };
    CreatorService.prototype.createCollectionMember = function (collection) {
        var collectionMember = new collection_member_model_1.CollectionMember();
        collectionMember.collectionName = collection;
        collectionMember.isVisible = true;
        collectionMember.tag = 'new';
        collectionMember.creationDate = new Date();
        return collectionMember;
    };
    CreatorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [constants_1.Constantz])
    ], CreatorService);
    return CreatorService;
}());
exports.CreatorService = CreatorService;
//# sourceMappingURL=creator.service.js.map