"use strict";
var Constantz = (function () {
    function Constantz() {
        this.minUsernameLenght = 3;
        this.maxUsernameLenght = 13;
        this.minPasswordLenght = 6;
        this.maxPasswordLenght = 36;
        this.avatarDefaultUrl = '../../assets/images/emptyProfile.jpg';
        this.collectionImageDefaultUrl = '../../assets/images/box-collection.jpg';
    }
    Object.defineProperty(Constantz.prototype, "MinUsernameLenght", {
        get: function () {
            return this.minUsernameLenght;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constantz.prototype, "MaxUsernameLenght", {
        get: function () {
            return this.maxUsernameLenght;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constantz.prototype, "MinPasswordLenght", {
        get: function () {
            return this.minPasswordLenght;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constantz.prototype, "MaxPasswordLenght", {
        get: function () {
            return this.maxPasswordLenght;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constantz.prototype, "AvatarDefaultUrl", {
        get: function () {
            return this.avatarDefaultUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constantz.prototype, "ImageDefaultUrl", {
        get: function () {
            return this.collectionImageDefaultUrl;
        },
        enumerable: true,
        configurable: true
    });
    return Constantz;
}());
exports.Constantz = Constantz;
//# sourceMappingURL=constants.js.map