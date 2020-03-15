import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
    return this.http.get<any>(`${environment.apiUrl}/invoice/buyers`);
  }

  // postInvoices(): Observable<any> {
  //   return this.http.post(this.API,{ headers: this.headers},invoicedata)
  // }
}