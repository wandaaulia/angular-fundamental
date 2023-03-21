import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private authService: AuthService, private router: Router) {}

  canLoad ( route: Route ) : boolean {

    const url = `/${route.path}`;

    return this.checkLogin(url);
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      const url: string = state.url;

      return this.checkLogin(url);
  }

  canActivateChild( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string) : boolean {
      if(this.authService.isLoggedIn) {
        return true;
      }


      this.authService.redirectUrl = url;

      this.router.navigate(['/login']);
      
  }
}
