import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-component/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-component/customer-create/customer-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CustomerUpdateComponent } from './customer-component/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './customer-component/customer-delete/customer-delete.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeListComponent } from './employee-component/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-component/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './employee-component/employee-update/employee-update.component';
import { ServiceListComponent } from './service-component/service-list/service-list.component';
import { ServiceCreateComponent } from './service-component/service-create/service-create.component';
import { ServiceUpdateComponent } from './service-component/service-update/service-update.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    NavbarComponent,
    CustomerUpdateComponent,
    CustomerDeleteComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    ServiceListComponent,
    ServiceCreateComponent,
    ServiceUpdateComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
