import { Component, OnInit, Input } from '@angular/core';
import { InvoiceService } from 'src/app/_services/invoice/invoice.service';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/_models/invoice';
import {NgForm} from '@angular/forms'
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {
  @Input() invoice: Invoice;
  // const id = this.route.snapshot.paramMap.get('id');
  submitted = false;
  invoices = []
  approveForm = new FormGroup({
    invoice_status: new FormControl(''),
 });

  constructor(private dataService: InvoiceService,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private httpClient: HttpClient,
    private router: Router,
    ) { }


  ngOnInit() {
  const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getBuyerInvoicesId(id).subscribe(invoice => this.invoice = invoice);          
    // this.getInvoiceFromRoute();
  }
  // save(){
  //     this.dataService.updateInvoice(this.approveForm.value);
  // }
  approveInvoice(){
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(this.approveForm.value)
    this.httpClient.post(`${environment.apiUrl}/invoice/update/${id}`, this.approveForm.value,{
    }).subscribe(result => {
      console.log( result );
  });
    // this.flashMessage.show('Invoice Updated Succesfully Succesfully!', { cssClass: 'alert-success mt-3', timeout: 2000 });
    // this.router.navigate(['/invoice']);
  }
  }


