import { Injectable } from '@angular/core';
import {LevelEmployee} from '../model/level-employee';
import {PartEmployee} from '../model/part-employee';

@Injectable({
  providedIn: 'root'
})
export class PartEmployeeServiceService {
  partEmployees: PartEmployee[] = [
    {
      idPart: 'P-1',
      namePart: 'Sale – Marketing'
    },
    {
      idPart: 'P-2',
      namePart: 'Hành Chính'
    },
    {
      idPart: 'P-3',
      namePart: 'Phục vụ'
    },
    {
      idPart: 'P-4',
      namePart: 'Quản lý'
    },
  ];

  constructor() { }
  findAll() {
    return this.partEmployees;
  }
  findById(id: string) {
    return this.partEmployees.find(partEmployee => partEmployee.idPart === id);
  }
}
