"use strict";
var rules_component_1 = require('./subcomponents/rules/rules.component');
var sign_in_component_1 = require('./subcomponents/sign-in/sign-in.component');
var sign_up_component_1 = require('./subcomponents/sign-up/sign-up.component');
var home_component_1 = require('./subcomponents/home/home.component');
var collections_component_1 = require('./subcomponents/collections/collections.component');
var my_collections_component_1 = require('./subcomponents/my-collections/my-collections.component');
var contact_us_component_1 = require('./subcomponents/contact-us/contact-us.component');
var dict_componet_1 = require('./subcomponents/dict/dict.componet');
var forum_component_1 = require('./subcomponents/forum/forum.component');
var profile_component_1 = require('./subcomponents/profile/profile.component');
var download_component_1 = require('./subcomponents/download/download.component');
var new_collection_component_1 = require('./subcomponents/new-collection/new-collection.component');
var index_1 = require('./route-guards/index');
exports.rootRouterConfig = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'contact-us',
        component: contact_us_component_1.ContactUsComponent,
        canActivate: [index_1.GuardIsLoggedUser]
    },
    {
        path: 'all-collections',
        component: collections_component_1.CollectionsComponent
    },
    {
        path: 'my-collections',
        component: my_collections_component_1.MyCollectionsComponent,
        canActivate: [index_1.GuardIsLoggedUser]
    },
    {
        path: 'sign-in',
        component: sign_in_component_1.SigninComponent
    },
    {
        path: 'sign-up',
        component: sign_up_component_1.SignupComponent
    },
    {
        path: 'dict',
        component: dict_componet_1.DictComponent,
        canActivate: [index_1.GuardIsLoggedUser]
    },
    {
        path: 'forum',
        component: forum_component_1.ForumComponent,
        canActivate: [index_1.GuardIsLoggedUser]
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent,
        canActivate: [index_1.GuardIsLoggedUser]
    },
    {
        path: 'new-collection',
        component: new_collection_component_1.NewCollectionComponent,
        canActivate: [index_1.GuardIsLoggedUser]
    },
    {
        path: 'download',
        component: download_component_1.DownloadComponent,
        canActivate: [index_1.GuardIsLoggedUser]
    },
    {
        path: 'rules',
        component: rules_component_1.RulesComponent
    }
];
//# sourceMappingURL=app.routes.js.map