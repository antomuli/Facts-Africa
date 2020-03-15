import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/_services/invoice/invoice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoices = []

  constructor(private dataService: InvoiceService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.dataService.getInvoices().subscribe( res => {
      this.invoices = res
    }, error => console.log(error))
  }
}
