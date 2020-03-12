import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const token = localStorage.getItem('token');

@Injectable({
  providedIn: 'root'
})
export class ViewbuyersService {
  private API = 'https://facts-africa.herokuapp.com/api/invoice/buyers';
  private apiToken: String;

  headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)

  constructor(private http: HttpClient,) { 
    
  }


  getBuyers() {
    console.log(this.headers)
    return this.http.get(this.API, { headers: this.headers})
  }

  // postInvoices(): Observable<any> {
  //   return this.http.post(this.API,{ headers: this.headers},invoicedata)
  // }
}