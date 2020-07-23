import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import {LoginComponent} from '../components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  // tslint:disable-next-line:typedef
  canActivate() {
    // tslint:disable-next-line:prefer-const
    let decodeJwt;
    if (localStorage.getItem('token') === null) {
      return false;
    }
    decodeJwt = jwt_decode(localStorage.getItem('token'));
    if (decodeJwt.roles === 'admin') {
      return true;
    }
    return false;
  }

  // tslint:disable-next-line:typedef
  canLogout() {
    // tslint:disable-next-line:prefer-const
    return localStorage.getItem('token') !== null;
  }

  // tslint:disable-next-line:typedef
  canLogin() {
    return localStorage.getItem('token') !== null;
  }
}
