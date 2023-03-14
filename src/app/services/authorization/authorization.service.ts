import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  USER_LOGGED_KEY = 'userLogged';
  private users: User[] = [
    {
      username: 'master8@lemoncode.net',
      password: '12345678',
    },
  ];

  constructor() {}

  login(user: User): Observable<boolean> {
    const userFound = this.users.find(
      ({ username, password }) =>
        user.username === username && user.password === password
    );
    if (!userFound) {
      return of(false).pipe(delay(2000));
    }
    localStorage.setItem(this.USER_LOGGED_KEY, JSON.stringify(userFound));
    return of(true).pipe(delay(2000));
  }

  logout(): void {
    localStorage.removeItem(this.USER_LOGGED_KEY);
  }

  isLogged(): boolean {
    return localStorage.getItem(this.USER_LOGGED_KEY) !== null;
  }

  getUsername(): string {
    const user: User | null = JSON.parse(
      localStorage.getItem(this.USER_LOGGED_KEY) ?? ''
    );
    return user?.username ?? '';
  }
}
