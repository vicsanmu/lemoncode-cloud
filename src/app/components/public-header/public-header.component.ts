import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss'],
})
export class PublicHeaderComponent {
  constructor(private router: Router) {}

  navigate(route: string) {
    this.router.navigateByUrl(route);
  }
}
