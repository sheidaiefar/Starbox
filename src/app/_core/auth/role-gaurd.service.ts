import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(
    public auth: AuthenticationService,
    public router: Router
    ) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');
    // decode the token to get its payload
    //const tokenPayload = decode(token);
    if (this.auth.userValue?.roles.includes(expectedRole)) {
      return true;
    }

    this.router.navigate(['/account/login']);
    return false;
  }
}
