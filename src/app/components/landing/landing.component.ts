import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from 'src/app/_services';
import { Router } from '@angular/router';
import { User, Role } from 'src/app/_models';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public viewContainerRef: ViewContainerRef
  loading = false;
  currentUser: User;
  userFromApi: User;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {}
  ngOnInit() {}
  Logout =() => {
    console.log("user is logging out")
    localStorage.clear();
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }
  get isVendor() {
    return this.currentUser && this.currentUser.role === Role.Vendor;
}
get isBuyer() {
    return this.currentUser && this.currentUser.role === Role.Buyer;
}

}
