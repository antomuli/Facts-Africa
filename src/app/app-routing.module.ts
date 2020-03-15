import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './_helpers';
import { VendorComponent } from './components/vendor/vendor.component';
import { Role } from './_models';
import { BuyerComponent } from './components/buyer/buyer.component';


const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'vendor',
      component: VendorComponent,
      canActivate: [AuthGuard],
      data: { roles: [Role.Vendor] }
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
    path: 'buyer',
    component: BuyerComponent,
    canActivate: [AuthGuard]

},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
