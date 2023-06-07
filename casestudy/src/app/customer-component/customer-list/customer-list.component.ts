import { Component, OnInit } from '@angular/core';
import {CustomerServiceService} from '../../service/customer-service.service';
import {Customer} from '../../model/customer';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TypeCustomer} from '../../model/type-customer';
import {TypeCustomerServiceService} from '../../service/type-customer-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  customers2: Customer[];
  sumPage: number;
  customer: Customer = {
  id: 'KH-65831',
  nameCustomer: 'Vo Kim Thanh',
  birthday: '2023-06-28',
  link: 'https://htran844.github.io/hihi/img/ig/i24.jpg',
  typeCustomer: {
    id: 'TS-2',
    nameTypeCustomer: 'Platinium',
  },
  phoneNumber: '09121465524',
  idCard: 3455465666,
  email: 'exam@gmail.com',
  address: 'Tiên Mỹ, Tiên Phước, Quảng Nam, le le'
  };
  formCustomer: FormGroup;
  id: string;
  typeCustomers: TypeCustomer[];
  currentPage = 1;
  mgs = false;
  // tslint:disable-next-line:max-line-length
  constructor(private serviceService: CustomerServiceService, private r: Router, private typeCustomerServiceService: TypeCustomerServiceService) {
    this.typeCustomerServiceService.findAll().subscribe(next => {
      this.typeCustomers = next;
    });
  }

  ngOnInit(): void {
    // this.customers = this.serviceService.findAll();
    // this.serviceService.findAll().subscribe(next => {
    //   this.customers = next;
    // });
    this.serviceService.paginate(this.currentPage, 12).subscribe(next => {
      this.customers = next;
    });
    this.page_sum();
  }
  getCustomerDelete(id: string) {
    this.serviceService.findById(id).subscribe(next => {
      this.customer = next;
    });
  }
  getCustomerUpdate(id: string) {
    this.serviceService.findById(id).subscribe(next => {
      this.customer = next;
      console.log(this.customer.nameCustomer);
      this.formCustomer = new FormGroup({
      id: new FormControl(this.customer.id),
      nameCustomer: new FormControl(this.customer.nameCustomer, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      birthday: new FormControl(this.customer.birthday, [Validators.required ]),
      idCard: new FormControl(this.customer.idCard, [Validators.required, Validators.pattern(/^[0-9]{9,12}$/)]),
      typeCustomer: new FormControl(this.customer.typeCustomer.id),
      phoneNumber: new FormControl(this.customer.phoneNumber, [Validators.required, Validators.pattern(/^(09|84\+9)(0|1)\d{8}$/)]),
      email: new FormControl(this.customer.email, [Validators.required, Validators.email]),
      address: new FormControl(this.customer.address, [Validators.required]),
          });
    });
  }

  delete(id: string | undefined) {
    this.serviceService.deleteCustomer(id).subscribe( next => {
      this.serviceService.paginate(this.currentPage, 12).subscribe(next2 => {
        this.customers = next2;
      });
      this.page_sum();
      this.formCustomer.reset();
    });
  }

  update() {
      const customer = this.formCustomer.value;
      customer.typeCustomer = this.typeCustomerServiceService.findById(customer.typeCustomer);
      this.serviceService.updateCustomer(customer.id, customer).subscribe();
      this.reloadPage();
  }
  reloadPage() {
    location.reload();
  }

  search(inputSearch: HTMLInputElement) {
    if (inputSearch.value === '') {
      alert('Input search');
    } else {
      this.serviceService.search(inputSearch.value).subscribe(next => {
        this.customers = next;
        if (this.customers.length === 0) {
          this.mgs = true;
        } else {
          this.mgs = false;
        }
      });
    }
  }

  page_next() {
    this.serviceService.findAll().subscribe(next => {
      this.customers2 = next;
    });
    this.sumPage = Math.floor(this.customers2.length / 12);
    if (this.currentPage < this.sumPage + 1) {
      this.currentPage ++;
      this.serviceService.paginate(this.currentPage, 12).subscribe(next => {
        this.customers = next;
      });
    }
  }
  page_sum() {
    this.serviceService.findAll().subscribe(next => {
      this.customers2 = next;
    });
    this.sumPage = Math.floor(this.customers2.length / 12);
  }

  page_prev() {
    if (this.currentPage > 1) {
      this.currentPage --;
      this.serviceService.paginate(this.currentPage, 12).subscribe(next => {
        this.customers = next;
      });
    }
  }

  page_first() {
    this.currentPage = 1;
    this.serviceService.paginate(this.currentPage, 12).subscribe(next => {
      this.customers = next;
    });
  }
  page_last() {
    this.serviceService.findAll().subscribe(next => {
      this.customers2 = next;
    });
    this.sumPage = Math.floor(this.customers2.length / 12);
    this.currentPage = this.sumPage + 1;
    this.serviceService.paginate(this.currentPage, 12).subscribe(next => {
      this.customers = next;
    });
  }

  page_current(currentPage: number) {
    this.page_sum();
    this.currentPage = currentPage;
    this.serviceService.paginate(this.currentPage, 12).subscribe(next => {
      this.customers = next;
    });
  }
}
