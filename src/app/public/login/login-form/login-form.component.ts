import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../common/services/authentication.service';
import { SessionStorageService } from 'ngx-webstorage';
import { AfterLoginActionsService } from '../../../common/services/after-login-actions.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  user: any = <any>{
    email: 'esmeralda@webtraining.zone',
    password: 'esmeralda'
  };

  constructor(
    public _authService: AuthenticationService,
    public _sessionStorage: SessionStorageService,
    public _afterLoginActionsService: AfterLoginActionsService,
    public _router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(event: Event) {
    event.preventDefault();

    // Run service for auth
    this._authService.login(this.user.email, this.user.password).subscribe(
      (data) => {
        this._authService.user = data;
        this._authService.hasSession = true;
        this._sessionStorage.store('user', data);

        // Close the modal
        this._afterLoginActionsService.onLoginCompleted.emit('Done');

        this._router.navigate(['/auth-home']); // Navigate to "auth-home"
      },
      err => {
        console.error(err);
        this._authService.hasSession = false;
      }
    );
  }

}
