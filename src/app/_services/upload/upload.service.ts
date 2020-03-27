import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Invoice } from 'src/app/_models/invoice';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpClient: HttpClient) { }

   //getPost(invoicepost): Observable <any> {
    //return this.http.post(`${environment.apiUrl}`,invoicepost);
    //return this.http.post<Invoice>((`${environment.apiUrl}`),)
  // }
  public sendFormData(formData) {
    return this.httpClient.post<any>(`${environment.apiUrl}`, formData, {
      reportProgress: true,
      observe: 'events'
    });
}
}
