import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = 'https://facts-africa.herokuapp.com/api/login'

  constructor(private http: HttpClient) { }

  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }
}
