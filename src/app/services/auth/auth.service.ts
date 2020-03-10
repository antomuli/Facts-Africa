import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly rootUrl = 'https://facts-africa.herokuapp.com/api/login/';
  constructor(private http: HttpClient) { }

  // registerUser(user: User) {
  //   const body: User = {
  //     role: user.role,
  //     first_name:user.first_name,
  //     last_name: user.last_name,
  //     phone: user.phone,
  //     address: user.address,
  //     email: user.email,
  //     password: user.password,
  //     password_confirmation: user.password_confirmation
  //   }
  //   var reqHeader = new HttpHeaders({'No-Auth':'True'});
  //   return this.http.post(this.rootUrl + '/register', body,{headers : reqHeader});
  // }

  userAuthentication(email, password) {
    var data = "email=" + email+  + "password=" + password + "grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.rootUrl + data, { headers: reqHeader });
  }

  getUserClaims(){
   return  this.http.get(this.rootUrl+'/api/GetUserClaims');
  }

}