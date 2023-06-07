import { Injectable } from '@angular/core';
import {PartEmployee} from '../model/part-employee';
import {Employee} from '../model/employee';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private API = 'http://localhost:3000/employee';
  constructor(private httpClient: HttpClient) { }
  addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.API, employee);
  }
  findAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API);
  }

  search(input: string): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API + '?q=' + input);
  }
  paginate(page: number, limit: number) {
    return this.httpClient.get<Employee[]>(this.API + '?_page=' + page + '&_limit=' + limit);
  }
  findById(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(this.API + '/' + id);
  }
  updateEmployee(id: string, employee: Employee): Observable<Customer> {
    return this.httpClient.put<Customer>(this.API  + '/' + id, employee);
  }
  deleteEmployee(id: string): Observable<Employee> {
    return  this.httpClient.delete<Employee>(this.API + '/' + id);
  }
}
