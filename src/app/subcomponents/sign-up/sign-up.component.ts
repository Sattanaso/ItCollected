import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserDataService } from '../../services/user.data.service';
import { CreatorService } from '../../services/creator.service';
import { ValidatorService } from '../../services/validator.service';
import { NotifierService } from '../../services/notifier.service';
import { AuthService } from '../../services/auth.service';


@Component({
  moduleId: module.id,
  selector: 'sign-up',
  styleUrls: ['./sign-up.component.css'],
  templateUrl: './sign-up.component.html'
})
export class SignupComponent implements OnInit {
  allUsers: User[];
  newUser: User;
  username: string;
  password: string;
  passwordConfirm: string;
  email: string;
  image: string;
  constructor(
    private userData: UserDataService,
    private creator: CreatorService,
    private validator: ValidatorService,
    private notifier: NotifierService,
    private auth: AuthService,
    private appRouter: Router) { }

  ngOnInit() {
    this.userData.getUsers().subscribe(allUsers => this.allUsers = allUsers);
  }

  signup(): void {
    if (this.validator.passwordsNotSame(this.password, this.passwordConfirm)) {
      this.notifier.passwordsNotSame();
      return;
    };

    this.newUser = this.creator.createUser(this.username, this.image, this.password, this.email);
    this.auth.registrate(this.newUser);

    this.appRouter.navigateByUrl('home');
    this.notifier.wellcome(this.username);

    this.username = '';
    this.password = '';
    this.passwordConfirm = '';
    this.email = '';
  }
}
