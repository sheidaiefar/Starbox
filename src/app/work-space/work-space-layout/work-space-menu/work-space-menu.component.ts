import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/_core/models/user';
import { AuthenticationService } from 'src/app/_core/services/authentication.service';

@Component({
  selector: 'work-space-menu',
  templateUrl: './work-space-menu.component.html',
  styleUrls: ['./work-space-menu.component.css'],
})
export class WorkSpaceMenuComponent {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    public auth: AuthenticationService,
  ) {}

  isAdmin(){    
    if (this.auth.userValue?.roles.includes(Role.Admin)) {
      return true;
    }
    return false;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }
}
