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
var SortByTitlePipe = (function () {
    function SortByTitlePipe() {
    }
    SortByTitlePipe.prototype.transform = function (members, options) {
        var propertyName = options[0] || 'Title';
        var order = options[1] || 'ascending';
        if (!members || members.length === 0) {
            return undefined;
        }
        var sortedMembers = members.sort(function (first, second) {
            var comparison = first[propertyName].localeCompare(second[propertyName]);
            if (order === 'descending') {
                return -comparison;
            }
            return comparison;
        });
        return sortedMembers;
    };
    SortByTitlePipe = __decorate([
        core_1.Pipe({
            name: 'sort'
        }), 
        __metadata('design:paramtypes', [])
    ], SortByTitlePipe);
    return SortByTitlePipe;
}());
exports.SortByTitlePipe = SortByTitlePipe;
//# sourceMappingURL=sort-by-title.pipe.js.map