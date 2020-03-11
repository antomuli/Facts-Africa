import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VendorComponent } from './vendor/vendor.component';
import { BuyerComponent } from './buyer/buyer.component';
import { UploadComponent } from './upload/upload.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'vendor',
    component: VendorComponent
  },
  {
    path: 'buyer',
    component: BuyerComponent
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
