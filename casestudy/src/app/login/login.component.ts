import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(userName: HTMLInputElement, password: HTMLInputElement) {
    if (userName.value === 'admin' && password.value === 'admin' ) {
      alert('Đăng nhập thành công');
      this.router.navigateByUrl('');
    } else {
      alert('Đăng nhập thất bại');
    }
  }
}
