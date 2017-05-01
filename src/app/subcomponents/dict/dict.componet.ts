import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Collection } from '../../models/collection.model';
import { CollectionMember } from '../../models/collection-member.model';

import { NotifierService } from '../../services/notifier.service';
import { CreatorService } from '../../services/creator.service';
import { AuthService } from '../../services/auth.service';
import { CollectionDataService } from '../../services/collections.service';
import { LocalStorageService } from '../../services/local-storage/index';
@Component({
  moduleId: module.id,
  selector: 'dict',
  styleUrls: ['./dict.component.css'],
  templateUrl: './dict.component.html'
})
export class DictComponent {
  @Output() userUpdated = new EventEmitter();
  currentCollectionName: string;
  currCollections: Collection[];
  currentMember: any = {
    title: '.',
    description: '...',
    imageUrl: '',
    collectionName: '',
    audio: '',
    video: '',
    info: ''
  };
  newMember: CollectionMember;
  title: string;
  description: string;
  imgUrl: string;
  audio: string;
  video: string;
  info: string;
  constructor(
    private localStorage: LocalStorageService,
    private notifier: NotifierService,
    private creator: CreatorService,
    private auth: AuthService,
    private appRouter: Router,
    private collectionData: CollectionDataService) {
    this.collectionData.getCollections().subscribe(colls => this.currCollections = colls);
  }

  getCurrentCollection(): Collection {
    return JSON.parse(localStorage.getItem('appCurrentCollection'));
  }

  onClick(event: any) {
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id.nodeValue;
    this.currentMember = this.getCurrentCollection().members.find(x => ((x.title === idAttr)));
  }

  isMyProtected() {
    return !this.getCurrentCollection().isProtected ||
      (this.getCurrentCollection().isProtected &&
        (this.auth.getUsername() === this.getCurrentCollection().owner));
  }

  addItem(): void {
    this.newMember = this.creator.createCollectionMember(this.getCurrentCollection().name);
    this.newMember.title = this.title;
    this.newMember.description = this.description;
    this.newMember.imageUrl = this.imgUrl;
    this.newMember.audio = this.audio;
    this.newMember.video = this.video;
    this.newMember.id = this.getCurrentCollection()._id;

    this.collectionData.updateCollection(this.newMember).subscribe(msg => this.notifier.itemAdded());

    this.appRouter.navigateByUrl('all-collections');
  }

  editItem(): void {
    this.newMember = this.creator.createCollectionMember(this.getCurrentCollection().name);
    this.newMember.title = this.currentMember.title;
    this.newMember.description = this.description;
    this.newMember.imageUrl = this.imgUrl;
    this.newMember.tag = 'edit';
    this.newMember.id = this.getCurrentCollection()._id;

    this.collectionData.updateCollection(this.newMember).subscribe(msg => this.notifier.itemEdited());

    this.appRouter.navigateByUrl('all-collections');
  }

  deleteItem(): void {
    this.currentMember.tag = 'delete';
    this.collectionData.updateCollection(this.currentMember).subscribe(msg => this.notifier.itemDeleted());

    this.appRouter.navigateByUrl('all-collections');
  }
}
