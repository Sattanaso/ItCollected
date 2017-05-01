import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'rules',
  styleUrls: ['./rules.component.css'],
  templateUrl: './rules.component.html'
})
export class RulesComponent {
  constructor(
    private appRouter: Router) {
  }
}
