import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-nav',
  styleUrls: ['./nav.component.css'],
  templateUrl: './nav.component.html'
})
export class NavComponent {
  constructor(private auth: AuthService) { }

  logOut(): void {
    this.auth.logOut();
  }
}
