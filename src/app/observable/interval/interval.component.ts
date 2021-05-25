import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilituService } from '../../appService/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  obsMsg;
  videoSubscription: Subscription;
  constructor(private _designUtility: DesignUtilituService) {}

  ngOnInit() {
    const boardCastVideos = interval(2000);

    this.videoSubscription = boardCastVideos.subscribe(res => {
      this.obsMsg = 'Video ' + res;
      this._designUtility.listAppend(this.obsMsg, 'elContainer');
      // this.listAppend(this.obsMsg, 'elContainer');
      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    });
  }
  imediateUnsubscribe() {
    this.videoSubscription.unsubscribe();
  }
  // listAppend(calVal, containerId) {
  //   let el = document.createElement('li');
  //   el.innerText = calVal;
  //   document.getElementById(containerId).appendChild(el);
  // }
}
