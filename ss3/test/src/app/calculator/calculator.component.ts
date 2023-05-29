import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number = undefined;

  constructor() { }

  ngOnInit(): void {
  }


  cong(first: string, second: string) {
    this.result = +first + +second;
  }

  tru(first: string, second: string) {
    this.result = +first - +second;
  }

  nhan(first: string, second: string) {
    this.result = +first * +second;
  }

  chia(first: string, second: string) {
    this.result = +first / +second;
  }


}
