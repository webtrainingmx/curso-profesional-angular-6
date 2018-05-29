import { Component, Input, OnInit } from '@angular/core';
import { AfterLoginActionsService } from '../services/after-login-actions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isModalActive;

  constructor(public _afterLoginActionsService: AfterLoginActionsService) {
  }

  ngOnInit() {
    this._afterLoginActionsService.onLoginCompleted.subscribe(
      (message: string) => {
        this.toggleModal();
      });
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }

}
