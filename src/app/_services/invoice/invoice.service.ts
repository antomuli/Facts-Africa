import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { Invoice } from "src/app/_models/invoice";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class InvoiceService {
  constructor(private http: HttpClient) {}
  getInvoices() {
    return this.http.get<Invoice[]>(`${environment.apiUrl}/invoice`);
  }
  getBuyerInvoices() {
    return this.http.get<any>(`${environment.apiUrl}/buyer/invoices`);
  }
  getBuyerInvoicesId(id) {
    return this.http.get<any>(`${environment.apiUrl}/invoice/${id}`);
  }
  getInvoiceById(id: number) {
    const url = `${environment.apiUrl}/invoice/update/${id}`;
    return this.http
      .get<Invoice>(url)
      .pipe(
        tap(selectedInvoice =>
          console.log(`selected invoice = ${JSON.stringify(selectedInvoice)}`)),
          catchError(error => of(new Invoice()))
      );
  }
  getInvoiceWithParams(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/buyer/invoices`);
  }
   /** PUT: update the movie on the server */
   updateInvoice(invoice: Invoice): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(`${environment.apiUrl}/invoice/update/${invoice.id}`, invoice, httpOptions).pipe(
      tap(updatedInvoice => console.log(`updated invoice = ${JSON.stringify(updatedInvoice)}`)),
      catchError(error => of(new Invoice()))
    );
  }
}
