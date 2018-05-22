import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  user: any = <any>{};

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(event: Event) {
    event.preventDefault();

    // Connect with the authentication service
    // TODO: Run service for auth

    // this._authService.logIn(this.user.username, this.user.password).subscribe(
    //   (data) => {
    //     this._authService.user = data;
    //     this._authService.hasSession = true;
    //     this._locker.store('user', data);
    //     this._router.navigate(['/home']); // navego al home
    //   },
    //   err => {
    //     console.error(err);
    //     this._authService.hasSession = false;
    //   }
    // );
  }

}
