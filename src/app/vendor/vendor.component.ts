import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceService } from '../services/invoice/invoice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  invoices = []

  constructor(private dataService: InvoiceService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    console.log("vendors component loaded")
    this.dataService.getInvoices().subscribe( res => {
      this.invoices = res
    }, error => console.log(error))
  }

  

  Logout =() => {
    console.log("user is logging out")
    localStorage.clear();
    this.router.navigate(['/']);
  }
  Upload = () => {
      this.router.navigate(['upload'])
  }

}
