import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {
  count = 1;
  constructor() {}

  @ViewChild('addBtn') addBtn: ElementRef;

  ngOnInit() {}
  ngAfterViewInit() {
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      let calVal = 'Video ' + this.count++;
      this.listAppend(calVal, 'elContainer');
    });
  }
  listAppend(calVal, containerId) {
    let el = document.createElement('li');
    el.innerText = calVal;
    document.getElementById(containerId).appendChild(el);
  }
}
