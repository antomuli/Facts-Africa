import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceService } from '../services/invoice/invoice.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  invoices = []

  constructor(private dataService: InvoiceService) { }

  ngOnInit() {
    this.dataService.getInvoices().subscribe((data:any[])=>{
      console.log(data)
      this.invoices = data
  })
  }
}
