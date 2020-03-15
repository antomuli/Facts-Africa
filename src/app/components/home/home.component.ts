import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { User, Role } from 'src/app/_models';
import { UserService, AuthenticationService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { InvoiceService } from 'src/app/_services/invoice/invoice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public viewContainerRef: ViewContainerRef
    loading = false;
    currentUser: User;
    userFromApi: User;
    invoices = []

    constructor(
        private userService: UserService,
        private dataService: InvoiceService,
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
        this.dataService.getInvoices().subscribe( res => {
            this.invoices = res
          }, error => console.log(error))
    }
    get isVendor() {
        return this.currentUser && this.currentUser.role === Role.Vendor;
    }
    Logout =() => {
        console.log("user is logging out")
        localStorage.clear();
        this.authenticationService.logout();
        this.router.navigate(['login']);
      }
}