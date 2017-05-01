import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Collection } from '../models/collection.model';
import { CollectionMember } from '../models/collection-member.model';

@Injectable()
export class CollectionDataService {
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });
  constructor(private http: Http) { }

  getCollections(): Observable<any> {
    return this.http.get('/collections').map(res => (res.json()));
  }

  getCollectionById(collectionId: string): Observable<any> {
    return this.http.get(`/collections/${collectionId}`).map(res => (res.json()));
  }

  postCollection(collection: Collection): Observable<any> {
    return this.http.post('/collections', JSON.stringify(collection), this.options);
  }

  updateCollection(collectionMem: CollectionMember): Observable<any> {
    return this.http.put(`/collections/${collectionMem.id}`, JSON.stringify(collectionMem), this.options);
  }
}
