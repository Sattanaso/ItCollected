import { Component } from '@angular/core';
import { UserDataService } from '../../services/user.data.service';
import { AuthService } from '../../services/auth.service';


@Component({
  moduleId: module.id,
  selector: 'forum',
  styleUrls: ['./forum.component.css'],
  templateUrl: './forum.component.html'
})
export class ForumComponent {
  idAttrUsername: string;
  users: any[];
  message: string;
  messages: string[];
  constructor(private auth: AuthService, private userData: UserDataService) {
    this.userData.getUsers().subscribe(x => this.users = x);
  }

  onClick(event: any) {
    let target = event.target || event.srcElement || event.currentTarget;
    this.idAttrUsername = target.attributes.id.nodeValue;
  }

  pushMessage() {
    let msg = this.message;
    console.log(msg);
    // this.messages.push(msg);
    this.message = '';
  }
}
