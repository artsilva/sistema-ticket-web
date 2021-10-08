import { User } from './../../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  removeCurrentSession(): void {
    // localStorage.removeItem('token');
    // localStorage.removeItem('timeConnection');
    // localStorage.removeItem('UserStorage');
    localStorage.clear();
  }

  setUserSession(user: User): void {
    console.log('user:', user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserSession(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

}
