import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { NotifierService } from '../../services/notifier.service';

@Component({
  moduleId: module.id,
  selector: 'sign-in',
  styleUrls: ['./sign-in.component.css'],
  templateUrl: './sign-in.component.html'
})
export class SigninComponent {
  users: User[];
  newUser: User;
  username: string;
  password: string;
  constructor(
    private appRouter: Router,
    private auth: AuthService,
    private notifier: NotifierService) {
  }

  signIn() {
    this.auth.logIn(this.username, this.password);

    if (!this.auth.isLogged()) {
      this.username = '';
      this.password = '';
      return;
    } else {
      this.notifier.wellcome(this.username);
      this.username = '';
      this.password = '';
      this.appRouter.navigateByUrl('home');
    }

  }

  goRegister(): void {
    this.appRouter.navigateByUrl('sign-up');
  }
}
