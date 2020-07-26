import { Injectable } from '@angular/core';
import { User } from '../model/user/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  addUser(user: User) {
    let users = [];
    if (localStorage.getItem('CurrentUser')) {
      users = JSON.parse(localStorage.getItem('CurrentUser'));
      users = [user, ...users];
    } else {
      users = [user];
    }
    localStorage.setItem('CurrentUser', JSON.stringify(users));
  }
}
