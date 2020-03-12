import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { InvoiceService } from '../services/invoice/invoice.service';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  SERVER_URL = "https://facts-africa.herokuapp.com/api/invoices";
  uploadForm: FormGroup; 
  register;

  constructor(private invoiceservice:InvoiceService) { }

  ngOnInit() {
    this.register ={
      buyer: '',
      amount:Number,
      due_date: ''


    }
  }
  uploadInvoice(){
    this.invoiceservice.invoiceUpload(this.register).subscribe(
      response =>{
         console.log(this.register.buyer+this.register.amount+this.register.due_date)
      },error =>console.log('error',error)
    )
  }

}
