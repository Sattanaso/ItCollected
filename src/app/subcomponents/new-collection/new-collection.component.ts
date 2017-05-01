import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Collection } from '../../models/collection.model';

import { AuthService } from '../../services/auth.service';
import { NotifierService } from '../../services/notifier.service';
import { CreatorService } from '../../services/creator.service';
import { CollectionDataService } from '../../services/collections.service';
import { Constantz } from '../../utils/constants';

@Component({
  moduleId: module.id,
  selector: 'new-collection',
  styleUrls: ['./new-collection.component.css'],
  templateUrl: './new-collection.component.html'
})
export class NewCollectionComponent {
  collections: Collection[];
  collectionNew: Collection;
  collectionName: string;
  collectionDescription: string;
  collectionImageUrl: string;
  collectionStatus: string = 'public';
  constructor(
    private auth: AuthService,
    private notifier: NotifierService,
    private creator: CreatorService,
    private appRouter: Router,
    private conz: Constantz,
    private collectionData: CollectionDataService) {
    this.collectionData.getCollections().subscribe(colls => { this.collections = colls; });
  }

  addNewCollection() {
    let owner = this.auth.getUsername();
    this.collectionNew = this.creator.createCollection(owner);

    this.collectionNew.name = this.collectionName;

    if ((this.collections.find(coll =>
      (coll.name === this.collectionNew.name)
    ))) {
      this.notifier.collectionAlreadyExists();
      return;
    };

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

    this.collectionData.postCollection(this.collectionNew).subscribe(newCollection => {

      this.collections.push(this.collectionNew);
    });
    this.notifier.collectionAdded();
    this.appRouter.navigateByUrl('home');
    this.collectionName = '';
    this.collectionDescription = '';
    this.collectionImageUrl = '';
  }
}
