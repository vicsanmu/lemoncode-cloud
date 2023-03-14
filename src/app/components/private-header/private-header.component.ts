import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization/authorization.service';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss'],
})
export class PrivateHeaderComponent {
  constructor(
    private router: Router,
    private authorizationService: AuthorizationService
  ) {}

  navigate(route: string) {
    this.router.navigateByUrl(route);
  }

  getUserName() {
    return this.authorizationService.getUsername();
  }

  logout() {
    return this.authorizationService.logout();
  }
}
