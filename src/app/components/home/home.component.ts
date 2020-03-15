import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models';
import { UserService, AuthenticationService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    loading = false;
    currentUser: User;
    userFromApi: User;

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private router: Router,
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loading = true;
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
        });
    }
    Logout =() => {
        console.log("user is logging out")
        localStorage.clear();
        this.authenticationService.logout();
        this.router.navigate(['login']);
      }
}