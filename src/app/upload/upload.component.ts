import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InvoiceService } from '../services/invoice/invoice.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  token = localStorage.getItem('token')
  private API = 'https://facts-africa.herokuapp.com/api/invoices';
  headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`)

  uploadForm = new FormGroup({
    buyer: new FormControl(),
    amount: new FormControl(),
    duedate: new FormControl()
 });

  constructor(private http: HttpClient,private invoiceService:InvoiceService) {
   }

  ngOnInit() {
  }
  postInvoices(){
    console.warn(this.uploadForm.value);
  }

}
