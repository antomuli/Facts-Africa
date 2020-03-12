import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../services/invoice/invoice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
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