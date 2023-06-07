import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './customer-component/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer-component/customer-create/customer-create.component';
import {CustomerUpdateComponent} from './customer-component/customer-update/customer-update.component';
import {CustomerDeleteComponent} from './customer-component/customer-delete/customer-delete.component';
import {HomeComponent} from './home/home.component';
import {EmployeeListComponent} from './employee-component/employee-list/employee-list.component';
import {EmployeeCreateComponent} from './employee-component/employee-create/employee-create.component';
import {EmployeeUpdateComponent} from './employee-component/employee-update/employee-update.component';
import {ServiceListComponent} from './service-component/service-list/service-list.component';
import {ServiceCreateComponent} from './service-component/service-create/service-create.component';
import {ServiceUpdateComponent} from './service-component/service-update/service-update.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer', component: CustomerListComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer/update/:id', component: CustomerUpdateComponent},
  {path: 'employee', component: EmployeeListComponent},
  {path: 'employee/create', component: EmployeeCreateComponent},
  {path: 'employee/update/:id', component: EmployeeUpdateComponent},
  {path: 'service', component: ServiceListComponent},
  {path: 'service/create', component: ServiceCreateComponent},
  {path: 'service/update/:id', component: ServiceUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
