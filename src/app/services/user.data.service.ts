import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/user.model';

@Injectable()
export class UserDataService {
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });
  constructor(private http: Http) { }

  getUsers(): Observable<any> {
    return this.http.get('/users').map(res => (res.json()));
  }
  getUserByUsername(username: string): Observable<any> {
    return this.http.get('/users/' + username).map(res => (res.json()));
  }

  postUser(user: User): Observable<any> {
    return this.http.post('/users', JSON.stringify(user), this.options);
  }
}
