import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { UserDataService } from './user.data.service';
import { NotifierService } from './notifier.service';
import { HashingService } from './hashing.service';
import { LocalStorageService } from './local-storage/index.js';

@Injectable()
export class AuthService {
  private isUserLogged: boolean = false;
  private users: User[];

  constructor(
    private userData: UserDataService,
    private notifier: NotifierService,
    private localStorage: LocalStorageService,
    private hash: HashingService) {
    this.userData.getUsers().subscribe(usrs => this.users = usrs);
  }

  isLogged(): boolean {
    return localStorage.getItem('itCollectedUsername') ? true : false;
  }

  getUsername(): string {
    if (this.isLogged()) {
      return localStorage.getItem('itCollectedUsername');
    }
  }

  registrate(user: User): void {
    user.passWord = this.hash.generateHash(user.passWord);
    this.userData.postUser(user).subscribe(newUser => {
      this.users.push(user);
      localStorage.setItem('itCollectedUsername', user.userName);
      this.isUserLogged = true;
    });
  }

  logIn(username: string, password: string): void {
    password = this.hash.generateHash(password);
    if (!(this.users.find((user: User) => (user.userName === username) && (user.passWord === password)))) {
      this.notifier.wrongUsernameOrPassword();
      return;
    };
    localStorage.setItem('itCollectedUsername', username);
    this.isUserLogged = true;
  }

  logOut(): void {
    localStorage.removeItem('itCollectedUsername');
    localStorage.removeItem('appCurrentCollection');
    this.isUserLogged = false;
  }
}
