import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionDataService } from '../../services/collections.service';
import { AuthService } from '../../services/auth.service';
import { Collection } from '../../models/collection.model';

@Component({
  moduleId: module.id,
  selector: 'my-collections',
  styleUrls: ['./my-collections.component.css'],
  templateUrl: './my-collections.component.html'
})
export class MyCollectionsComponent {
  @Output() userUpdated = new EventEmitter();
  collections: Collection[];
  currentCollection: Collection;
  currentCollectionName: string;
  constructor(
    private appRouter: Router,
    private auth: AuthService,
    private dataService: CollectionDataService) {
    this.dataService.getCollections().subscribe(colls => this.collections = colls);
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
