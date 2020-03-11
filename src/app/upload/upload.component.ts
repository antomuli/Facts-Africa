import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  SERVER_URL = "https://facts-africa.herokuapp.com/api/invoices";
  uploadForm: FormGroup; 

  constructor() { }

  ngOnInit() {
  }

}
