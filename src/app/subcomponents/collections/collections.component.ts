import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Collection } from '../../models/collection.model';
import { CollectionDataService } from '../../services/collections.service';
import { LocalStorageService } from '../../services/local-storage/index';

@Component({
  moduleId: module.id,
  selector: 'collections',
  styleUrls: ['./collections.component.css'],
  templateUrl: './collections.component.html'
})
export class CollectionsComponent {
  @Output() userUpdated = new EventEmitter();
  collections: Collection[];
  currentCollection: Collection;
  currentCollectionName: string;
  constructor(
    private auth: AuthService,
    private appRouter: Router,
    private localStorage: LocalStorageService,
    private collectionService: CollectionDataService) {
    this.collectionService.getCollections().subscribe(colls => { this.collections = colls; });
  }

  onClick(event: any) {
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    this.currentCollectionName = idAttr.nodeValue;
    this.userUpdated.emit(this.currentCollectionName);
    localStorage.removeItem('appCurrentCollection');
    localStorage.setItem('appCurrentCollection', JSON.stringify(this.collections.find(x => this.currentCollectionName === x.name)));
    this.appRouter.navigateByUrl('dict');
  }
}
