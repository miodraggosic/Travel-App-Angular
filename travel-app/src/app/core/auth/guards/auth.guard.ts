import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private authService: AuthService) {}

  canLoad(): boolean {
    return this.isAuthentificated();
  }

  canActivate(): boolean {
    return this.isAuthentificated();
  }

  private isAuthentificated(): boolean {
    if (!this.authService.isAuthentificated()) {
      console.log('auth', this.authService.isAuthentificated());

      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
