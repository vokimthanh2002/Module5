import { Injectable } from '@angular/core';
import {TypeCustomer} from '../model/type-customer';
import {LocationEmployee} from '../model/location-employee';

@Injectable({
  providedIn: 'root'
})
export class LocationEmployeeServiceService {
  locationEmployees: LocationEmployee[] = [
    {
      idLocation: 'L-1',
      nameLocation: 'Lễ tân'
    },
    {
      idLocation: 'L-2',
      nameLocation: 'Phục vụ,'
    },
    {
      idLocation: 'L-3',
      nameLocation: 'Chuyên viên'
    },
    {
      idLocation: 'L-4',
      nameLocation: 'Giám sát'
    },
    {
      idLocation: 'L-5',
      nameLocation: 'Quản lý'
    },
    {
      idLocation: 'L-6',
      nameLocation: 'Giám đốc'
    },
  ];
  constructor() { }
  findAll() {
    return this.locationEmployees;
  }
  findById(id: string) {
    return this.locationEmployees.find(locationEmployees => locationEmployees.idLocation === id);
  }
}
