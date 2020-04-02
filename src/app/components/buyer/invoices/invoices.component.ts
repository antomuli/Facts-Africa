import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/_services/invoice/invoice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Invoice } from 'src/app/_models/invoice';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {  
  id: number
  invoice:Invoice

  invoices = []
  myinvoice = []
  approveForm: any;
  listInvoices:Invoice[];

  constructor(private dataService: InvoiceService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.dataService.getInvoiceWithParams().subscribe( data => {
      this.listInvoices = data
    }, error => console.log(error))
  }
}
