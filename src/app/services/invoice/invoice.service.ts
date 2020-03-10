import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private API = 'https://facts-africa.herokuapp.com/api/invoice'

  constructor(private http: HttpClient) { }

  getInvoices() {
    return this.http.get<any>(this.API)
  }
}