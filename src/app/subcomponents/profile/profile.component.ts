import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionDataService } from '../../services/collections.service';
import { AuthService } from '../../services/auth.service';
import { UserDataService } from '../../services/user.data.service';
import { Collection } from '../../models/collection.model';
import { User } from '../../models/user.model';

@Component({
  moduleId: module.id,
  selector: 'profile',
  styleUrls: ['./profile.component.css'],
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit, OnDestroy {
  username: string = 'Username';
  email: string = 'E-mail';
  backgroundImageUrl: string = 'https://image.freepik.com/free-photo/blue-surface-with-creases_1160-191.jpg';
  avatarImageUrl: string = '../../../assets/images/emptyProfile.jpg';

  @Output() userUpdated = new EventEmitter();
  collections: Collection[];
  currentCollection: Collection;
  currentCollectionName: string;
  currentUsers: User[];
  currentUser: User;

  constructor(
    private appRouter: Router,
    private auth: AuthService,
    private userDataService: UserDataService,
    private dataService: CollectionDataService) { }

  ngOnInit() {
    this.dataService.getCollections().subscribe(colls => this.collections = colls);
    this.userDataService.getUserByUsername(this.auth.getUsername()).subscribe(x => this.currentUser = x);
  }

  getUsername() {
    this.username = this.currentUser.userName;
    this.email = this.currentUser.profile.eMail;
    this.avatarImageUrl = this.currentUser.profile.imageUrl;
  }

  onClick(event: any) {
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    this.currentCollectionName = idAttr.nodeValue;
    this.userUpdated.emit(this.currentCollectionName);
    localStorage.removeItem('appCurrentCollection');
    localStorage.setItem('appCurrentCollection',
      JSON.stringify(this.collections.find(x => this.currentCollectionName === x.name)));
    this.appRouter.navigateByUrl('dict');
  }

  ngOnDestroy() {
  }
}
