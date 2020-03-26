import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/_services/invoice/invoice.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ViewbuyersService } from 'src/app/_services/buyers/viewbuyers.service';
import { Invoice } from 'src/app/_models/invoice';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  buyers =  []

  uploadForm = new FormGroup({
    buyer_id: new FormControl,
    amount: new FormControl,
    due_date: new FormControl
 });

  constructor(private httpClient: HttpClient,private invoiceService:InvoiceService, private viewbuyersService:ViewbuyersService) {}
  postInvoice(){
    let myinvoice = JSON.stringify(this.uploadForm.value);
    this.httpClient.post(`${environment.apiUrl}/invoice`, myinvoice).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  //   console.warn(this.uploadForm.value);
  //   console.log(myinvoice)
  //   console.warn(this.uploadForm.value);
  //   this.http.post(`${environment.apiUrl}/invoice`,{
  //   }).subscribe(result => {
  //     console.log( result );
  // });
  }
  //postInvoice (invoice: Invoice){
  //return this.http.post<Invoice>(`${environment.apiUrl}/invoice`, invoice);
  // }
  // handleError(arg0: string, invoice: Invoice): (err: any, caught: Observable<any>) => import("rxjs").ObservableInput<any> {
  //   throw new Error("Method not implemented.");
  // }
  // postInvoice(){
  //   console.warn(this.uploadForm.value);
  // }

  // const formData = new FormData();
  // formData.append('file', this.uploadForm.get('profile').value);

  // this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
  //   (res) => console.log(res),
  //   (err) => console.log(err)
  // );
  ngOnInit() {
    this.viewbuyersService.getBuyers().subscribe( res => {
      this.buyers = res
    }, error => console.log(error))
  }

}
