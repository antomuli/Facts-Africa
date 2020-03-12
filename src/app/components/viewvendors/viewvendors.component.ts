import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ViewvendorsService } from 'src/app/services/vendors/viewvendors.service';

@Component({
  selector: 'app-viewvendors',
  templateUrl: './viewvendors.component.html',
  styleUrls: ['./viewvendors.component.css']
})
export class ViewvendorsComponent implements OnInit {

  vendor = []

  constructor(private dataService: ViewvendorsService, private router: Router, private http: HttpClient) { }


  ngOnInit() {
    console.log("vendors component loaded")
    this.dataService.getVendors().subscribe( res => {
      this.vendor = res
    }, error => console.log(error))
  }

}
