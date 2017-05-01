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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var index_js_1 = require('./services/local-storage/index.js');
var router_1 = require('@angular/router');
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./app.component');
var rules_component_1 = require('./subcomponents/rules/rules.component');
var index_1 = require('./subcomponents/common/index');
var collections_component_1 = require('./subcomponents/collections/collections.component');
var my_collections_component_1 = require('./subcomponents/my-collections/my-collections.component');
var dict_componet_1 = require('./subcomponents/dict/dict.componet');
var contact_us_component_1 = require('./subcomponents/contact-us/contact-us.component');
var forum_component_1 = require('./subcomponents/forum/forum.component');
var download_component_1 = require('./subcomponents/download/download.component');
var profile_component_1 = require('./subcomponents/profile/profile.component');
var home_component_1 = require('./subcomponents/home/home.component');
var sign_in_component_1 = require('./subcomponents/sign-in/sign-in.component');
var sign_up_component_1 = require('./subcomponents/sign-up/sign-up.component');
var new_collection_component_1 = require('./subcomponents/new-collection/new-collection.component');
var sort_by_title_pipe_1 = require('./pipes/sort-by-title.pipe');
var auth_service_1 = require('./services/auth.service');
var common_1 = require('@angular/common');
var _1 = require('angular2-toastr/');
var creator_service_1 = require('./services/creator.service');
var validator_service_1 = require('./services/validator.service');
var notifier_service_1 = require('./services/notifier.service');
var hashing_service_1 = require('./services/hashing.service');
var user_data_service_1 = require('./services/user.data.service');
var collections_service_1 = require('./services/collections.service');
var index_2 = require('./route-guards/index');
var constants_1 = require('./utils/constants');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                rules_component_1.RulesComponent,
                index_1.NavComponent,
                collections_component_1.CollectionsComponent,
                new_collection_component_1.NewCollectionComponent,
                my_collections_component_1.MyCollectionsComponent,
                dict_componet_1.DictComponent,
                contact_us_component_1.ContactUsComponent,
                forum_component_1.ForumComponent,
                download_component_1.DownloadComponent,
                profile_component_1.ProfileComponent,
                home_component_1.HomeComponent,
                sign_in_component_1.SigninComponent,
                sign_up_component_1.SignupComponent,
                _1.ToasterComponent,
                _1.ToastComponent,
                sort_by_title_pipe_1.SortByTitlePipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.rootRouterConfig),
                index_js_1.LocalStorageModule.withConfig({
                    prefix: 'app',
                    storageType: 'localStorage'
                })
            ],
            providers: [
                {
                    provide: common_1.LocationStrategy,
                    useClass: common_1.HashLocationStrategy
                },
                constants_1.Constantz,
                index_2.GuardIsLoggedUser,
                auth_service_1.AuthService,
                validator_service_1.ValidatorService,
                _1.ToasterService,
                notifier_service_1.NotifierService,
                index_js_1.LocalStorageService,
                user_data_service_1.UserDataService,
                hashing_service_1.HashingService,
                collections_service_1.CollectionDataService,
                creator_service_1.CreatorService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map