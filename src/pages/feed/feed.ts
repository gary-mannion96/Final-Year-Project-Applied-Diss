import { Component } from '@angular/core';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {
  /*
  Cattle
  */
  cattle: number;
  silage: number;
  feedValue: number;
  baleValue: number;
  /*
  Bales
  */
  bales: number;
  sBales: number;
  baleAMT: number;

  constructor() {
  }

  calculateFeed(){
    if (this.silage > 0 && this.cattle > 0) {
      let finalFeed = this.cattle * this.silage * 1.6;
      this.feedValue = parseFloat(finalFeed.toFixed(2));
      this.baleValue = this.cattle * this.silage * 1.6 / 0.9;
    }
  }

  calculateBales(){
    if(this.bales > 0 && this.sBales >= 0){
      let finalBales = (this.bales * 0.8 + this.sBales * 0.8) / 0.9;
      this.baleAMT = parseFloat(finalBales.toFixed(2));
    }
  }

}