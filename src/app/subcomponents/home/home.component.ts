import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionDataService } from '../../services/collections.service';
import { Collection } from '../../models/collection.model';
import { AuthService } from '../../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  @Output() userUpdated = new EventEmitter();
  collections: Collection[];
  currentCollection: Collection;
  currentCollectionName: string;
  constructor(private auth: AuthService, private router: Router, private dataService: CollectionDataService) {
    this.dataService.getCollections().subscribe(colls => this.collections = colls.slice(0, 3));
  }

  onClick(event: any) {
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    this.currentCollectionName = idAttr.nodeValue;
    this.userUpdated.emit(this.currentCollectionName);
    localStorage.removeItem('appCurrentCollection');
    localStorage.setItem('appCurrentCollection', JSON.stringify(this.collections.find(x => this.currentCollectionName === x.name)));
    this.router.navigateByUrl('dict');
  }
}
