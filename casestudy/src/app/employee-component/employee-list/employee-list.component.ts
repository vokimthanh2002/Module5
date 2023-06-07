import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../../service/employee-service.service';
import {Employee} from '../../model/employee';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {LocationEmployeeServiceService} from '../../service/location-employee-service.service';
import {LevelEmployeeServiceService} from '../../service/level-employee-service.service';
import {PartEmployeeServiceService} from '../../service/part-employee-service.service';
import {LocationEmployee} from '../../model/location-employee';
import {LevelEmployee} from '../../model/level-employee';
import {PartEmployee} from '../../model/part-employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  employee: Employee;
  formEmployee: FormGroup;
  locations: LocationEmployee[];
  levels: LevelEmployee[];
  parts: PartEmployee[];

  // tslint:disable-next-line:max-line-length
  constructor(private employeeServiceService: EmployeeServiceService, private router: Router, private locationS: LocationEmployeeServiceService, private levelS: LevelEmployeeServiceService, private parkS: PartEmployeeServiceService, private r: Router) {
    this.locations = this.locationS.findAll();
    this.levels = this.levelS.findAll();
    this.parts = this.parkS.findAll();
  }

  ngOnInit(): void {
   this.employeeServiceService.findAll().subscribe(next => {
     this.employees = next;
   });
  }

  getEmployeeDelete(idEmployee: string) {
    this.employeeServiceService.findById(idEmployee).subscribe(next => {
      this.employee = next;
    });
  }
  delete() {
    this.employeeServiceService.deleteEmployee(this.employee.id).subscribe();
    this.router.navigateByUrl('employee');
  }

  getEmployeeUpdate(idEmployee: string) {
    // this.employee = this.employeeServiceService.findById(idEmployee);
    // const employee =  this.employeeServiceService.findById(this.employee.idEmployee);
    // this.formEmployee = new FormGroup({
    //   idEmployee: new FormControl(employee.idEmployee),
    //   nameEmployee: new FormControl(employee.nameEmployee),
    //   birthday: new FormControl(employee.birthday),
    //   idCard: new FormControl(employee.idCard),
    //   wage: new FormControl(employee.wage),
    //   phoneNumber: new FormControl(employee.phoneNumber),
    //   email: new FormControl(employee.email),
    //   address: new FormControl(employee.address),
    //   location: new FormControl(employee.location.idLocation),
    //   level: new FormControl(employee.level.idLevel),
    //   part: new FormControl(employee.part.idPart),
    // });
  }

  update() {
    const employee = this.formEmployee.value;
    employee.location = this.locationS.findById(employee.location);
    employee.level = this.levelS.findById(employee.level);
    employee.part = this.parkS.findById(employee.part);
    // this.employeeServiceService.updateEmployee(employee);
    console.log(employee);
    this.r.navigateByUrl('employee');
  }
}
