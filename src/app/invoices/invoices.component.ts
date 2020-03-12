import { Component, OnInit, ElementRef ,ViewChild } from '@angular/core';
import { InvoiceService } from '../services/invoice/invoice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas'; 

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
  }  
  
  invoices = []

  constructor(private dataService: InvoiceService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    console.log("vendors component loaded")
    this.dataService.getInvoices().subscribe( res => {
      this.invoices = res
    }, error => console.log(error))
  }

  

  Logout =() => {
    console.log("user is logging out")
    localStorage.clear();
    this.router.navigate(['/']);
  }
  Upload = () => {
      this.router.navigate(['upload'])
  }

}