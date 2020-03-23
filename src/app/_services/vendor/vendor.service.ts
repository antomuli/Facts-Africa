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
<<<<<<< HEAD
    return this.http.get<any>(`${environment.apiUrl}/user/all`);
=======
    return this.http.get<any>(`${environment.apiUrl}/users/suppliers`);
>>>>>>> 17dbf230f7024b7b68bb78ca6c806c5f692a6d78
  }

  // postInvoices(): Observable<any> {
  //   return this.http.post(this.API,{ headers: this.headers},invoicedata)
  // }
}