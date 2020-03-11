import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  clientID: string = 'PAST BUYERS ID ';
baseUrl: string = 'https://facts-africa.herokuapp.com/api/invoices';

  constructor(private _http: HttpClient) { }

  search(queryString: string) {
    let _URL = this.baseUrl + queryString;
    return this._http.get(_URL);
}}
