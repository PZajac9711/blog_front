import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  // tslint:disable-next-line:typedef
  canActivate(){
    // tslint:disable-next-line:prefer-const
    let decodeJwt;
    decodeJwt = jwt_decode('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJMb2dpbiIsInJvbGVzIjoidXNlciIsImxvZ2luIjoia2ljYWoxMjMiLCJpYXQiOjE1OTU0Mjk3NDgsImV4cCI6MTU5NTQzMDc0OH0.OaORmzpfyOmgYtvMHlNQz9-1kO7toXXwEUrM30e-eoE');
    if (decodeJwt.roles === 'admin') {
      return true;
    }
    return false;
  }
}
