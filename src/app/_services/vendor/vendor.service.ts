import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient,) { 
    
  }
  getVendors() {
    return this.http.get<any>(`${environment.apiUrl}/user/all`);
  }

  // postInvoices(): Observable<any> {
  //   return this.http.post(this.API,{ headers: this.headers},invoicedata)
  // }
}