import {Component, Input, OnInit} from '@angular/core';
import {CustomerServiceService} from '../../service/customer-service.service';
import {Customer} from '../../model/customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  customers: Customer[];

  constructor(private s: CustomerServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  reload(navLink: string) {
    const  currentUrl = this.router.url;
    if (currentUrl === navLink) {
      this.router.navigateByUrl('', {skipLocationChange: true}).then(() => this.router.navigateByUrl(currentUrl));
    }
  }
}
