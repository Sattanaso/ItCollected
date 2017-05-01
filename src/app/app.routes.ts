import { Routes } from '@angular/router';

import { RulesComponent } from './subcomponents/rules/rules.component';
import { SigninComponent } from './subcomponents/sign-in/sign-in.component';
import { SignupComponent } from './subcomponents/sign-up/sign-up.component';
import { HomeComponent } from './subcomponents/home/home.component';
import { CollectionsComponent } from './subcomponents/collections/collections.component';
import { MyCollectionsComponent } from './subcomponents/my-collections/my-collections.component';
import { ContactUsComponent } from './subcomponents/contact-us/contact-us.component';
import { DictComponent } from './subcomponents/dict/dict.componet';
import { ForumComponent } from './subcomponents/forum/forum.component';
import { ProfileComponent } from './subcomponents/profile/profile.component';
import { DownloadComponent } from './subcomponents/download/download.component';
import { NewCollectionComponent } from './subcomponents/new-collection/new-collection.component';

import { GuardIsLoggedUser } from './route-guards/index';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    canActivate: [GuardIsLoggedUser]
  },
  {
    path: 'all-collections',
    component: CollectionsComponent
  },
  {
    path: 'my-collections',
    component: MyCollectionsComponent,
    canActivate: [GuardIsLoggedUser]
  },
  {
    path: 'sign-in',
    component: SigninComponent
  },
  {
    path: 'sign-up',
    component: SignupComponent
  },
  {
    path: 'dict',
    component: DictComponent,
    canActivate: [GuardIsLoggedUser]
  },
  {
    path: 'forum',
    component: ForumComponent,
    canActivate: [GuardIsLoggedUser]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [GuardIsLoggedUser]
  },
  {
    path: 'new-collection',
    component: NewCollectionComponent,
    canActivate: [GuardIsLoggedUser]
  },
  {
    path: 'download',
    component: DownloadComponent,
    canActivate: [GuardIsLoggedUser]
  },
  {
    path: 'rules',
    component: RulesComponent
  }
];
