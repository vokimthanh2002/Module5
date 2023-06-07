import { Injectable } from '@angular/core';
import {TypeCustomer} from '../model/type-customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeCustomerServiceService {
  private API = 'http://localhost:3000/typeCustomer';
  constructor(private httpClient: HttpClient) {
  }
  findAll(): Observable<TypeCustomer[]> {
    return this.httpClient.get<TypeCustomer[]>(this.API);
  }

  findById(id: string): Observable<TypeCustomer> {
    return this.httpClient.get<TypeCustomer>(this.API + '/' + id);
  }
}
