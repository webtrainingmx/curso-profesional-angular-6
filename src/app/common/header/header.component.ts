import { Component, OnInit } from '@angular/core';
import { AfterLoginActionsService } from '../services/after-login-actions.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isModalActive;

  constructor(
    public _afterLoginActionsService: AfterLoginActionsService,
    public _authService: AuthenticationService,
    public router: Router) {
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

  logout() {
    this._authService.logout();
    this.router.navigate(['/home']);
  }

}
