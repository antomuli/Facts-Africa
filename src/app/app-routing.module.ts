import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VendorComponent } from './vendor/vendor.component';
import { BuyerComponent } from './buyer/buyer.component';
import { UploadComponent } from './upload/upload.component';
import { ViewbuyersComponent } from './viewbuyers/viewbuyers.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { BuyerinvoiceComponent } from './components/buyerinvoice/buyerinvoice.component';
import { ViewvendorsComponent } from './components/viewvendors/viewvendors.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'vendor',
    component: VendorComponent,
    children: [
      { path: 'viewbuyers', component: ViewbuyersComponent},
      { path: 'invoices', component: InvoicesComponent},
      { path: 'uploadinvoice', component: UploadComponent},
    ]
  },
  {
    path: 'buyer',
    component: BuyerComponent,
    children: [
      { path: 'viewvendors', component: ViewvendorsComponent},
      { path: 'myinvoices', component: BuyerinvoiceComponent},
    ]
  },
  {
    path: 'upload',  
    component: UploadComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
