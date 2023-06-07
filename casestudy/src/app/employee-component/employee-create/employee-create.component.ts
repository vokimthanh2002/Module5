import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LocationEmployee} from '../../model/location-employee';
import {LevelEmployee} from '../../model/level-employee';
import {PartEmployee} from '../../model/part-employee';
import {LocationEmployeeServiceService} from '../../service/location-employee-service.service';
import {LevelEmployeeServiceService} from '../../service/level-employee-service.service';
import {PartEmployeeServiceService} from '../../service/part-employee-service.service';
import {EmployeeServiceService} from '../../service/employee-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  formEmployee: FormGroup;
  locations: LocationEmployee[];
  levels: LevelEmployee[];
  parts: PartEmployee[];

  // tslint:disable-next-line:max-line-length
  constructor(private locationS: LocationEmployeeServiceService, private levelS: LevelEmployeeServiceService, private parkS: PartEmployeeServiceService, private s: EmployeeServiceService, private r: Router) { }

  ngOnInit(): void {
    this.formEmployee = new FormGroup({
      id: new FormControl(''),
      nameEmployee: new FormControl(''),
      birthday: new FormControl(''),
      idCard: new FormControl(''),
      wage: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      location: new FormControl(''),
      level: new FormControl(''),
      part: new FormControl(''),
    });
    this.locations = this.locationS.findAll();
    this.levels = this.levelS.findAll();
    this.parts = this.parkS.findAll();
  }

  addEmployee() {
    debugger
    const employee  = this.formEmployee.value;
    console.log(employee);
    employee.location = this.locationS.findById(employee.location);
    employee.level = this.levelS.findById(employee.level);
    employee.part = this.parkS.findById(employee.part);
    // tslint:disable-next-line:radix
    employee.id = `E-${parseInt(String(Math.random() * 1000))}`;
    this.s.addEmployee(employee).subscribe();
    this.formEmployee.reset();
    this.r.navigateByUrl('employee');
  }
}
