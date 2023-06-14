import { Component, OnInit } from '@angular/core';
import {CustomerServiceService} from '../../service/customer-service.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';
import {TypeCustomerServiceService} from '../../service/type-customer-service.service';
import {TypeCustomer} from '../../model/type-customer';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  formCustomer: FormGroup;
  typeCustomers: TypeCustomer[];
  customers: Customer[];

  constructor(private s: CustomerServiceService, private  r: Router, private typeCustomerServiceService: TypeCustomerServiceService) {
    this.typeCustomerServiceService.findAll().subscribe(next => {
      this.typeCustomers = next;
    });
  }
  ngOnInit(): void {
    this.formCustomer = new FormGroup({
      // tslint:disable-next-line:radix
      id: new FormControl(''),
      link: new FormControl(''),
      nameCustomer: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      birthday: new FormControl('', [Validators.required ]),
      idCard: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{9,12}$/)]),
      typeCustomer: new FormControl(''),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^(09|84\+9)(0|1)\d{8}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
    });
  }

  addCustomer() {
    debugger;
    const customer  = this.formCustomer.value;
    // this.typeCustomerServiceService.findById(customer.typeCustomer).subscribe(next => {
    //   customer.typeCustomer = next;
    // });
    // tslint:disable-next-line:radix
    customer.id = 'KH-' + parseInt(String((Math.random() * 100000)));
    console.log(customer);
    this.s.addCustomer(customer).subscribe(next => {
        this.s.findAll().subscribe(next2 => {
          this.customers = next2;
        });
        this.formCustomer.reset();
    }, error => {},
      () => {},
    );
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Thêm thành công',
      showConfirmButton: false,
      timer: 1500
    });
  }

}
