import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/_services/invoice/invoice.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ViewbuyersService } from 'src/app/_services/buyers/viewbuyers.service';
import { Invoice } from 'src/app/_models/invoice';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  invoice = Invoice;
  buyers =  []

  uploadForm = new FormGroup({
    buyer_id: new FormControl(),
    amount: new FormControl(),
    due_date: new FormControl()
 });

  //constructor(private viewbuyersService:ViewbuyersService, private http: HttpClient) {}
  // postInvoice(){
  //   console.warn(this.uploadForm.value);
  //   console.log(this.uploadForm)
  //   console.warn(this.uploadForm.value);
  //   this.httpClient.post(`${environment.apiUrl}/invoice`,{
  //   }).subscribe(result => {
  //     console.log( result );
  // });
  // }
  constructor(public fb: FormBuilder) {
   this.form = this.fb.group({
     name: [''],
     avatar: [null]
   })
 }
  ngOnInit() {
    this.viewbuyersService.getBuyers().subscribe( res => {
      this.buyers = res
    }, error => console.log(error))
  }
  postInvoice(){
    this.http.post(`${environment.apiUrl}/invoice`, this.uploadForm).subscribe(status=> console.log(JSON.stringify(status)));
  }
}
