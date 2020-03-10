import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private API = 'http://127.0.0.1:8000/api/?format=json'

  constructor(private http: HttpClient) { }

  getInvoices() {
    return this.http.get<any>(this.API)
  }
}