import { Component } from '@angular/core';
import { User, Role } from './_models';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  get isVendor() {
      return this.currentUser && this.currentUser.role === Role.Vendor;
  }
  get isBuyer() {
    return this.currentUser && this.currentUser.role === Role.Buyer;
}

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
}