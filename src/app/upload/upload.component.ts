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
  endurl = this.API + this.headers

  uploadForm = new FormGroup({
    buyer_id: new FormControl(),
    amount: new FormControl(''),
    due_date: new FormControl('')
 });

  constructor(private http: HttpClient,private invoiceService:InvoiceService) {
   }

   createAuthorizationHeader(headers: Headers) {
    headers.append("Authorization", `Bearer ${this.token}`); 
  }

  get(API) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(API, {
      headers: this.headers
    });
  }
  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: this.headers
    });
  }
  getInvoices() {
    console.log(this.headers)
    return this.http.get<any>(this.API, { headers: this.headers})
  }

    postInvoices(){
    let myinvoice = JSON.stringify(this.uploadForm.value);
    console.warn(this.uploadForm.value);
    this.http.post(this.API, myinvoice,{
      headers: this.headers
    }).subscribe(result => {
      console.log( result );
  });
  }
  ngOnInit() {
  }

}
