import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private alertifySerice: AlertifyService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onLogin(loginForm: NgForm) {
    const token = this.authService.authUser(loginForm.value);
    if (token) {
      localStorage.setItem('token', token.email);
      this.router.navigate(['/']);
      this.alertifySerice.success('Login Successfully');
    } else {
      this.alertifySerice.error('Login not successful');
    }
  }
}
