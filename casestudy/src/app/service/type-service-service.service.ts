import { Injectable } from '@angular/core';
import {TypeCustomer} from '../model/type-customer';
import {TypeService} from '../model/type-service';

@Injectable({
  providedIn: 'root'
})
export class TypeServiceServiceService {
  typeServices: TypeService[] = [
    {
      idTypeService: 'KT-1',
      nameTypeService: 'Năm',
      price: 120000000,
    },
    {
      idTypeService: 'KT-2',
      nameTypeService: 'Tháng',
      price: 12000000,
    },
    {
      idTypeService: 'KT-3',
      nameTypeService: 'Ngày',
      price: 1200000,
    },
    {
      idTypeService: 'KT-4',
      nameTypeService: 'Giờ',
      price: 120000,
    },
    ];

  constructor() { }
  findAll() {
    return this.typeServices;
  }
  findById(id: string) {
    return this.typeServices.find(typeService => typeService.idTypeService === id);
  }
}
