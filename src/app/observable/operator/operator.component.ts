import { Component, OnInit } from '@angular/core';
import { of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {
  squareNum;
  listSquareNum;
  constructor() {}

  ngOnInit() {
    const nums = of(1, 2, 3, 4, 5);
    const squareValues = map((val: number) => val * val);
    const squaredNums = squareValues(nums);
    this.squareNum = squaredNums.subscribe(x => {
      this.listAppend(x, 'opContainer');
    });
    const source = of(function hello() {
      return 'Hello';
    });
    const subscribe = source.subscribe(val => {
      this.listAppend(val, 'opContainer3');
    });

    //Pipe function
    const squareOddVals = pipe(
      filter((n: number) => n % 2 !== 0),
      map((n: number) => n * n)
    );

    const squareOdd = squareOddVals(nums);
    squareOdd.subscribe(x => {
      this.listAppend(x, 'opContainer2');
    });
  }

  listAppend(calVal, containerId) {
    let el = document.createElement('li');
    el.innerText = calVal;
    document.getElementById(containerId).appendChild(el);
  }
}
