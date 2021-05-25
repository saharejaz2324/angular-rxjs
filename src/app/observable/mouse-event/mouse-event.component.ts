import {
  Component,
  AfterContentInit,
  OnInit,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-mouse-event',
  templateUrl: './mouse-event.component.html',
  styleUrls: ['./mouse-event.component.css']
})
export class MouseEventComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}
  @ViewChild('app') app;

  ngAfterViewInit() {
    const click$ = fromEvent(this.app.nativeElement, 'click').subscribe(res => {
      this.listAppend('Clicked inside the div', 'insideDiv');
      console.log('Clicked inside the div');
    });

    const mouseOver$ = fromEvent(this.app.nativeElement, 'mouseover').subscribe(
      res => {
        this.listAppend('Mouse is inside the div', 'insideDiv');
        console.log('Mouse is inside the div');
      }
    );

    const mouseOut$ = fromEvent(this.app.nativeElement, 'mouseout').subscribe(
      res => {
        this.listAppend('Mouse is outside from div', 'insideDiv');
        console.log('Mouse is outside from div');
      }
    );
  }
  listAppend(calVal, containerId) {
    let el = document.createElement('li');
    el.innerText = calVal;
    document.getElementById(containerId).appendChild(el);
  }
}
