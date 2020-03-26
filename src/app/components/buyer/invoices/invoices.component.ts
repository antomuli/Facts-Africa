import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/_services/invoice/invoice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  myInvoice = {
    1: "Pending",
    2: "Approved",
    3: "Declined",
};

  invoices = []

  constructor(private dataService: InvoiceService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.dataService.getBuyerInvoices().subscribe( res => {
      this.invoices = res
    }, error => console.log(error))
  }
}
