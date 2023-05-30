import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Login, SignUp, User } from '../../../models/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storageKey = 'logged_user';

  private admin = new BehaviorSubject<boolean>(false);
  readonly userRole = this.admin as Observable<boolean>;

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(user: Login): Observable<boolean> {
    return this.httpClient
      .post<Login>(`${environment.baseApiUrl}login`, user)
      .pipe(
        map((res: any) => {
          console.log(res);
          if (res) {
            this.isAdmin(res.user);
            localStorage.setItem(
              this.storageKey,
              JSON.stringify(res.accessToken)
            );
            this.router.navigateByUrl('home');
            return true;
          }
          return false;
        })
      );
  }

  signUp(user: SignUp) {
    const registerUser: User = this.registerUser(user);
    return this.httpClient
      .post<User>(`${environment.baseApiUrl}users`, registerUser)
      .pipe(
        map((res: any) => {
          console.log(res);

          if (res) {
            this.router.navigateByUrl('login');
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
    this.router.navigateByUrl('login');
  }

  isAuthentificated(): boolean {
    return localStorage.getItem(this.storageKey) !== null;
  }

  isAdmin(user: User): void {
    if (user.role === 'admin') {
      this.admin.next(true);
      return;
    }
    this.admin.next(false);
  }

  getAccessToken(): string | null {
    return JSON.parse(localStorage.getItem(this.storageKey)!);
  }

  private registerUser(user: SignUp): User {
    const userToRegister: User = {
      firstName: user.firstName!,
      lastName: user.lastName!,
      createdAt: new Date().toISOString(),
      email: user.email!,
      password: user.password.newPassword!,
      role: user.role!,
    };
    return userToRegister;
  }
}
