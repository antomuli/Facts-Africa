import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private _auth: AuthService,private _router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('token')) {
      this._router.navigate(['vendor'])
    }
  }
  loginUser () {
    console.log("user is logging in")
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.api_token)
        this._router.navigate(['vendor'])
      },
      err => console.log(err)
    )
  }
}
