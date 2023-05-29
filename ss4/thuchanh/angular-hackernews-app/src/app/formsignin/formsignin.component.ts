import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formsignin',
  templateUrl: './formsignin.component.html',
  styleUrls: ['./formsignin.component.css']
})
export class FormsigninComponent implements OnInit {
  rfEmail: FormGroup;
  country: string[] = ['Da Nang', 'Quang nam', 'Quang Ngai'];
  gender: string[] = ['Nam', 'Nữ', 'Khác'];

  constructor() { }

  ngOnInit(): void {
    this.rfEmail = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/((09|03|07|08|05)+([0-9]{8})\b)/g)]),
      password: new FormControl('', [Validators.minLength(6), Validators.maxLength(20), Validators.required]),
      confirmPassword: new FormControl('')
    });
  }

}
