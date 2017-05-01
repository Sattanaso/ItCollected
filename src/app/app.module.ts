import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocalStorageModule, LocalStorageService } from './services/local-storage/index.js';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';
import { RulesComponent } from './subcomponents/rules/rules.component';
import { NavComponent } from './subcomponents/common/index';
import { CollectionsComponent } from './subcomponents/collections/collections.component';
import { MyCollectionsComponent } from './subcomponents/my-collections/my-collections.component';
import { DictComponent } from './subcomponents/dict/dict.componet';
import { ContactUsComponent } from './subcomponents/contact-us/contact-us.component';
import { ForumComponent } from './subcomponents/forum/forum.component';
import { DownloadComponent } from './subcomponents/download/download.component';
import { ProfileComponent } from './subcomponents/profile/profile.component';
import { HomeComponent } from './subcomponents/home/home.component';
import { SigninComponent } from './subcomponents/sign-in/sign-in.component';
import { SignupComponent } from './subcomponents/sign-up/sign-up.component';
import { NewCollectionComponent } from './subcomponents/new-collection/new-collection.component';
import { SortByTitlePipe } from './pipes/sort-by-title.pipe';

import { AuthService } from './services/auth.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ToasterComponent, ToastComponent, ToasterService } from 'angular2-toastr/';
import { CreatorService } from './services/creator.service';
import { ValidatorService } from './services/validator.service';
import { NotifierService } from './services/notifier.service';
import { HashingService } from './services/hashing.service';
import { UserDataService } from './services/user.data.service';
import { CollectionDataService } from './services/collections.service';
import { GuardIsLoggedUser } from './route-guards/index';
import { Constantz } from './utils/constants';

@NgModule({
  declarations: [
    AppComponent,
    RulesComponent,
    NavComponent,
    CollectionsComponent,
    NewCollectionComponent,
    MyCollectionsComponent,
    DictComponent,
    ContactUsComponent,
    ForumComponent,
    DownloadComponent,
    ProfileComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    ToasterComponent,
    ToastComponent,
    SortByTitlePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig),
    LocalStorageModule.withConfig({
      prefix: 'app',
      storageType: 'localStorage'
    })
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    Constantz,
    GuardIsLoggedUser,
    AuthService,
    ValidatorService,
    ToasterService,
    NotifierService,
    LocalStorageService,
    UserDataService,
    HashingService,
    CollectionDataService,
    CreatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
