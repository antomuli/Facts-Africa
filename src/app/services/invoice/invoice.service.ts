import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


const token = localStorage.getItem('token')

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private API = 'https://facts-africa.herokuapp.com/api/invoices';
  private apiToken: String;

  headers = new HttpHeaders().set("Authorization", `Bearer ${token}`)

  constructor(private http: HttpClient) { 
    
  }


  getInvoices() {
    console.log(this.headers)
    return this.http.get<any>(this.API, { headers: this.headers})
  }
}