import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) {}

  canActivate(): boolean {
    if (this.cookieService.get('jwtToken')) {
      return true;
    } else {
      this.router.navigate(['/auth']); // Redireciona para a página de login
      return false;
    }
  }
}
