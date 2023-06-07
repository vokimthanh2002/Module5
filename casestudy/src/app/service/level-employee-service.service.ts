import { Injectable } from '@angular/core';
import {LevelEmployee} from '../model/level-employee';

@Injectable({
  providedIn: 'root'
})
export class LevelEmployeeServiceService {
  levelEmployees: LevelEmployee[] = [
    {
      idLevel: 'LV-1',
      nameLevel: 'Trung cấp'
    },
    {
      idLevel: 'LV-2',
      nameLevel: 'Cao đẳng'
    },
    {
      idLevel: 'LV-3',
      nameLevel: 'Đại học'
    },
    {
      idLevel: 'LV-4',
      nameLevel: 'Sau đại học'
    },
  ];

  constructor() { }
  findAll() {
    return this.levelEmployees;
  }
  findById(id: string) {
    return this.levelEmployees.find(levelEmployee => levelEmployee.idLevel === id);
  }
}
