import { Component, OnInit } from '@angular/core';
import { CardExpPipe } from './pipes/card-exp.pipe';

enum statuses {
  warning = 'warning',
  success = 'success',
  error = 'error'
}

enum statusTypes {
  warning,
  success,
  error
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [CardExpPipe]
})
export class AppComponent implements OnInit {
  title = 'lesson3';
  count = 1.23456;
  cardExp = '0523';
  cardExpFormatted = '';
  isBold = true;
  isLoggedIn = false;
  isSuccess = true;
  isLogin = true;
  names = ["Tom", "Bob", "Sam", "Bill"];
  STATUSES = statuses;
  selectedStatus = statuses.error;

  constructor(private cardExpPipe: CardExpPipe) {}

  ngOnInit() {
    this.cardExpFormatted = this.cardExpPipe.transform(this.cardExp);
  }

  toggle() {
    this.isLogin = !this.isLogin;
  }

  get disabled() {
    return false;
  }

  get isSuccessed() {
    return this.isSuccess ? 'green' : 'red'
  }

  remove(name: string) {
    // const index = this.names.findIndex(nameItem => nameItem === name);
    // this.names.splice(index, 1);

    this.names = this.names.filter(nameItem => nameItem !== name);
  }
}
