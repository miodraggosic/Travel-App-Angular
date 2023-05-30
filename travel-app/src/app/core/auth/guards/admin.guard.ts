import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate, CanLoad {
  constructor(private auth: AuthService) {}

  canLoad(): boolean {
    return this.isAdmin();
  }
  canActivate(): boolean {
    return this.isAdmin();
  }

  private isAdmin(): boolean {
    let admin = false;
    this.auth.userRole
      .pipe(take(1))
      .subscribe((res) => (res ? (admin = true) : (admin = false)));
    return admin;
  }
}
