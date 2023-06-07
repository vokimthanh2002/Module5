import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerServiceService} from '../../service/customer-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TypeCustomerServiceService} from '../../service/type-customer-service.service';
import {TypeCustomer} from '../../model/type-customer';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  formCustomer: FormGroup;
  id: string;
  typeCustomers: TypeCustomer[];

  // tslint:disable-next-line:max-line-length
  constructor(private s: CustomerServiceService, private activatedRoute: ActivatedRoute, private router: Router, private typeCustomerServiceService: TypeCustomerServiceService) {
    // this.typeCustomers = this.typeCustomerServiceService.findAll();
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.s.findById(this.id).subscribe(next => {
        const customer = next;
        console.log(customer);
        this.formCustomer = new FormGroup({
          id: new FormControl(customer.id),
          nameCustomer: new FormControl(customer.nameCustomer, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
          birthday: new FormControl(customer.birthday, [Validators.required ]),
          idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern(/^[0-9]{9,12}$/)]),
          typeCustomer: new FormControl(customer.typeCustomer.id),
          phoneNumber: new FormControl(customer.phoneNumber, [Validators.required, Validators.pattern(/^(09|84\+9)(0|1)\d{8}$/)]),
          email: new FormControl(customer.email, [Validators.required, Validators.email]),
          address: new FormControl(customer.address, [Validators.required]),
        });
      });
    });
  }
  ngOnInit(): void {
     this.typeCustomerServiceService.findAll().subscribe(next => {
       this.typeCustomers = next;
     });
  }

  // updateStudent() {
  //   const customer = this.formCustomer.value;
  //   customer.typeCustomer = this.typeCustomerServiceService.findById(customer.typeCustomer);
  //   this.s.updateCustomer(customer);
  //   this.router.navigateByUrl('/customer');
  //   alert('Cập nhật khách hàng thành công');
  // }
  updateStudent() {
    const customer = this.formCustomer.value;
    this.typeCustomerServiceService.findById(customer.typeCustomer).subscribe(next => {
      customer.typeCustomer = next;
      this.s.updateCustomer(customer.id, customer).subscribe();
      this.router.navigateByUrl('customer');
    });
  }
}
