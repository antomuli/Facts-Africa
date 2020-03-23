import { Component, OnInit } from '@angular/core';
import { ViewbuyersService } from 'src/app/_services/buyers/viewbuyers.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { VendorService } from 'src/app/_services/vendor/vendor.service';

@Component({
  selector: 'app-myvendors',
  templateUrl: './myvendors.component.html',
  styleUrls: ['./myvendors.component.css']
})
export class MyvendorsComponent implements OnInit {

  vendors = []

  constructor(private dataService: VendorService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.dataService.getVendors().subscribe( res => {
      this.vendors = res
    }, error => console.log(error))
  }
}
