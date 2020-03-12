import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ViewbuyersService } from '../services/buyers/viewbuyers.service';

@Component({
  selector: 'app-viewbuyers',
  templateUrl: './viewbuyers.component.html',
  styleUrls: ['./viewbuyers.component.css']
})
export class ViewbuyersComponent implements OnInit {

  buyers = [];

  constructor(private dataService: ViewbuyersService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    console.log('viewbuyers component loaded');
    this.dataService.getBuyers().subscribe( res => {
      this.buyers = res;
    }, error => console.log(error));
  }

}
