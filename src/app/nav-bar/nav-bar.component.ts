import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private router: Router, private alertify: AlertifyService) {}

  ngOnInit(): void {}
  loggedIn() {
    return localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    this.alertify.success('logout success');
    this.router.navigate(['/login']);
  }
}
