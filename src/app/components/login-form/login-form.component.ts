import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization/authorization.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  hide = true;
  form: FormGroup;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authorizationService: AuthorizationService,
    private router: Router
  ) {
    this.form = this.fb.group({
      user: this.username,
      password: this.password,
    });
  }

  getErrorMessage(formControl: FormControl) {
    return formControl.hasError('required') ? 'You must enter a value' : '';
  }

  login() {
    this.isLoading = true;
    this.authorizationService
      .login({
        username: this.username.value!,
        password: this.password.value!,
      })
      .subscribe((isLogged) => {
        this.isLoading = false;
        if (isLogged) {
          this.router.navigateByUrl('dashboard');
        }
      });
  }
}
