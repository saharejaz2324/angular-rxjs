import { Injectable } from '@angular/core';

@Injectable()
export class DesignUtilituService {
  constructor() {}
  listAppend(calVal, containerId) {
    let el = document.createElement('li');
    el.innerText = calVal;
    document.getElementById(containerId).appendChild(el);
  }
}
