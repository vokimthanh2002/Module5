import { Injectable } from '@angular/core';
import {TypeService} from '../model/type-service';
import {Service} from '../model/service';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class ServiceServiceService {
  services: Service[] = [
    {
      idService: 'DV-1',
      nameService: 'Dịch vụ hồ bơi',
      acreage: 120,
      numberOfFloors: 12,
      maximumNumberOfPeople: 50,
      rentalCosts: 12000000,
      status: 'Thuê theo năm',
      typeService: {
      idTypeService: 'KT-1',
      nameTypeService: 'Năm',
      price: 120000000,
      }
    },
    {
      idService: 'DV-2',
      nameService: 'Dịch vụ tắm trắng',
      acreage: 120,
      numberOfFloors: 12,
      maximumNumberOfPeople: 50,
      rentalCosts: 12000000,
      status: 'Thuê theo năm',
      typeService: {
        idTypeService: 'KT-1',
        nameTypeService: 'Năm',
        price: 120000000,
      }
    },
    {
      idService: 'DV-3',
      nameService: 'Dịch vụ ăn tối',
      acreage: 120,
      numberOfFloors: 12,
      maximumNumberOfPeople: 50,
      rentalCosts: 12000000,
      status: 'Thuê theo năm',
      typeService: {
        idTypeService: 'KT-1',
        nameTypeService: 'Năm',
        price: 120000000,
      }
    },
    {
      idService: 'DV-4',
      nameService: 'Dịch vụ ăn sáng',
      acreage: 120,
      numberOfFloors: 12,
      maximumNumberOfPeople: 50,
      rentalCosts: 12000000,
      status: 'Thuê theo năm',
      typeService: {
        idTypeService: 'KT-1',
        nameTypeService: 'Năm',
        price: 120000000,
      }
    },
    {
      idService: 'DV-5',
      nameService: 'Dịch vụ ăn chiều',
      acreage: 120,
      numberOfFloors: 12,
      maximumNumberOfPeople: 50,
      rentalCosts: 12000000,
      status: 'Thuê theo năm',
      typeService: {
        idTypeService: 'KT-1',
        nameTypeService: 'Năm',
        price: 120000000,
      }
    },
    ];
  constructor() { }
  addService(service: Service) {
    this.services.push(service);
  }
  findAll() {
    return this.services;
  }
  findById(id: string) {
    return this.services.find(service => service.idService === id);
  }
  updateCustomer(service: Service) {
    for (let i = 0; i < this.services.length; i++) {
      if (service.idService === this.services[i].idService) {
        this.services[i] = service;
      }
    }
  }
  deleteCustomer(id: string) {
    const index = this.services.findIndex(service => service.idService === id);
    if (index !== -1) {
      this.services.splice(index, 1);
    }
  }
}
