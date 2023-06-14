import { Component, OnInit } from '@angular/core';
import {CustomerServiceService} from '../../service/customer-service.service';
import {Customer} from '../../model/customer';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TypeCustomer} from '../../model/type-customer';
import {TypeCustomerServiceService} from '../../service/type-customer-service.service';
import Swal from 'sweetalert2';

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
  colorBg = 'none';
  color = 'white';
  mgs = false;
  p = 1;
  // tslint:disable-next-line:max-line-length
  constructor(private serviceService: CustomerServiceService, private r: Router, private typeCustomerServiceService: TypeCustomerServiceService) {
    this.typeCustomerServiceService.findAll().subscribe(next => {
      this.typeCustomers = next;
    });
    // Swal.fire({
    //   title: 'Xin chào!',
    //   text: 'Chào mừng bạn đến với trang web của chúng tôi.',
    //   imageUrl: 'https://kenh14cdn.com/thumb_w/600/203336854389633024/2022/5/7/photo1651917750649-165191775103228158924.gif',
    //   imageWidth: 400,
    //   imageHeight: 400,
    //   imageAlt: 'Custom image',
    // });
  }

  ngOnInit(): void {
    this.serviceService.findAll().subscribe(next => {
      this.customers = next;
    });
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
      link: new FormControl(this.customer.link)
          });
    });
  }

  delete(id: string | undefined) {
    this.serviceService.deleteCustomer(id).subscribe( next => {
      this.serviceService.findAll().subscribe(next2 => {
        this.customers = next2;
      });
      this.formCustomer.reset();
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Xóa thành công',
      showConfirmButton: false,
      color: this.color,
      background: this.colorBg,
      timer: 1500
    });
  }

  update() {
      const customer = this.formCustomer.value;
      this.typeCustomerServiceService.findById(customer.typeCustomer).subscribe(next => {
      customer.typeCustomer = next;
      this.serviceService.updateCustomer(customer.id, customer).subscribe(next2 => {
        this.serviceService.findAll().subscribe(next3 => {
          this.customers = next3;
        });
      });
      this.r.navigateByUrl('customer');
    });
      Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Cập nhật thành công',
      showConfirmButton: false,
      color: this.color,
      background: this.colorBg,
      timer: 1500
    });
  }
  reloadPage() {
    location.reload();
  }

  search(inputSearch: HTMLInputElement) {
    if (inputSearch.value === '') {
      Swal.fire({
        title: 'Vui lòng nhập thông tin cần tìm kiếm',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
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

  addCustomer() {
    debugger;
    const customer  = this.formCustomer.value;
    // this.typeCustomerServiceService.findById(customer.typeCustomer).subscribe(next => {
    //   customer.typeCustomer = next;
    // });
    // tslint:disable-next-line:radix
    customer.id = 'KH-' + parseInt(String((Math.random() * 100000)));
    console.log(customer);
    this.serviceService.addCustomer(customer).subscribe(next => {
        this.serviceService.findAll().subscribe(next2 => {
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
      background: this.colorBg,
      color: this.color,
      showConfirmButton: false,
      timer: 1500
    });
  }
}
