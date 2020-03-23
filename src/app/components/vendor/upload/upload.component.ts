import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/_services/invoice/invoice.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ViewbuyersService } from 'src/app/_services/buyers/viewbuyers.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  buyers =  []

  uploadForm = new FormGroup({
    buyer_id: new FormControl(),
    amount: new FormControl(''),
    due_date: new FormControl('')
 });

  constructor(private http: HttpClient,private invoiceService:InvoiceService, private viewbuyersService:ViewbuyersService) {}
  // postInvoice(){
  //   let myinvoice = JSON.stringify(this.uploadForm.value);
  //   console.log(myinvoice)
  //   console.warn(this.uploadForm.value);
  //   this.http.post(`${environment.apiUrl}/invoice`,myinvoice,{
  //   }).subscribe(result => {
  //     console.log( result );
  // });
  // }
  postInvoice(){}
  ngOnInit() {
    this.viewbuyersService.getBuyers().subscribe( res => {
      this.buyers = res
    }, error => console.log(error))
  }

}
