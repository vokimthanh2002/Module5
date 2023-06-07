import { Injectable } from '@angular/core';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  private API = 'http://localhost:3000/customer';
  constructor(private httpClient: HttpClient) { }
  addCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.API, customer);
  }
  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API);
  }

  search(input: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API + '?q=' + input);
  }
  paginate(page: number, limit: number) {
    return this.httpClient.get<Customer[]>(this.API + '?_page=' + page + '&_limit=' + limit);
  }
  findById(id: string): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API + '/' + id);
  }
  updateCustomer(id: string, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.API  + '/' + id, customer);
  }
  deleteCustomer(id: string): Observable<Customer> {
   return  this.httpClient.delete<Customer>(this.API + '/' + id);
  }
}
