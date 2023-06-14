import { Injectable } from '@angular/core';
import {TypeService} from '../model/type-service';
import {Service} from '../model/service';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceServiceService {
  private API = 'http://localhost:3000/services';
  constructor(private httpClient: HttpClient) { }
  addService(service: Service): Observable<Service> {
    return  this.httpClient.post<Service>(this.API, service);
  }
  findAll(): Observable<Customer[]> {
    return  this.httpClient.get<Customer[]>(this.API);
  }
  findById(id: string): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API + '/' + id);
  }
  updateCustomer(id: string, service: Service): Observable<Service> {
   return this.httpClient.put<Service>(this.API + '/' + id, service);
  }
  deleteCustomer(id: string) {
    return this.httpClient.delete(this.API + '/' + id);
  }
}
