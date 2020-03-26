import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/_services/invoice/invoice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Status } from 'src/app/_models/status';
import { Invoice } from 'src/app/_models/invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  myInvoice = {
    1: "Pending",
    2: "Approved",
    3: "Declined",
};
  invoice: Invoice;

  invoices = []

  constructor(
    private dataService: InvoiceService, 
    private router: Router, 
    private http: HttpClient) {
      this.invoice = this.invoice;
    }

  ngOnInit() {
    this.dataService.getInvoices().subscribe( res => {
      this.invoices = res
    }, error => console.log(error))
  }
  // get isPending() {
  //   return Status.Pending;
  // }
  get isPending() {
    return this.invoices && this.invoice.invoice_status === Status.Pending;
}
}
