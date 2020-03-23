import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { ViewbuyersComponent } from './components/vendor/viewbuyers/viewbuyers.component';
import { InvoiceComponent } from './components/vendor/invoice/invoice.component';
import { UploadComponent } from './components/vendor/upload/upload.component';
import { LandingComponent } from './components/landing/landing.component';
import { InvoicesComponent } from './components/buyer/invoices/invoices.component';


const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard],
      children: [
        // vendor components
      {
        path: '',component: LandingComponent,
        pathMatch: 'full'
      },
      {
        path: 'invoice',component: InvoiceComponent,
        pathMatch: 'full'
      },
      {
        path: 'upload',component: UploadComponent,
        pathMatch: 'full'
      },
      {
        path: 'buyers',component: ViewbuyersComponent,
        pathMatch: 'full'
      },
        // buyer components
      {
        path: 'invoices',component: InvoicesComponent,
        pathMatch: 'full'
      },
      ]
  },
  // { path: '' , loadChildren:'src/app/components/home'},
  // {
  //     path: 'vendor',
  //     component: VendorComponent,
  //     canActivate: [AuthGuard],
  //     data: { roles: [Role.Vendor] }
  // },
  {
      path: 'login',
      component: LoginComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
//RouterModule.forRoot(routes, {useHash: true}); // Solved this error: -->  SecurityError: Failed to execute 'pushState' on 'History': 
export const routing = RouterModule.forRoot(routes, { enableTracing: false });

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
