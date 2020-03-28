import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { ViewbuyersComponent } from './components/vendor/viewbuyers/viewbuyers.component';
import { InvoiceComponent } from './components/vendor/invoice/invoice.component';
import { UploadComponent } from './components/vendor/upload/upload.component';
import { LandingComponent } from './components/landing/landing.component';
import { InvoicesComponent } from './components/buyer/invoices/invoices.component';
import { MyvendorsComponent } from './components/buyer/myvendors/myvendors.component';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ViewbuyersComponent,
    InvoiceComponent,
    UploadComponent,
    LandingComponent,
    InvoicesComponent,
    MyvendorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
