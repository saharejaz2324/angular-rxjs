import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  promiseVal;

  constructor() {}

  dellAvaiable() {
    return true;
  }
  hpAvaiable() {
    return false;
  }

  ngOnInit() {
    let butLaptop = new Promise((resolve, reject) => {
      // resolve('Promise is resolved');
      // reject('promise is reject');

      if (this.dellAvaiable()) {
        return setTimeout(() => {
          resolve('Dell Laptop is here.');
        }, 3000);
      } else if (this.hpAvaiable()) {
        return setTimeout(() => {
          resolve('HP laptop is here');
        }, 3000);
      } else {
        return setTimeout(() => {
          reject('No laptop Available');
        }, 3000);
      }
    });

    butLaptop
      .then(res => {
        this.promiseVal = res;
        console.log('then Result => ', res);
      })
      .catch(res => {
        this.promiseVal = res;
        console.log('catch Result => ', res);
      });
  }

  myFunction() {
    console.log('my function called');
  }
}
