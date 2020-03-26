import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewbuyersService {

  constructor(private http: HttpClient,) { 
    
  }
  getBuyers() {
    return this.http.get<any>(`${environment.apiUrl}/users/buyers`);
  }
// http://factsafrika.herokuapp.com/api/users/buyers
  // postInvoices(): Observable<any> {
  //   return this.http.post(this.API,{ headers: this.headers},invoicedata)
  // }
}