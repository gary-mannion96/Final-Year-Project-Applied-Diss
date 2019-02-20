import { Component } from '@angular/core';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {
  /*
  Dairy Cows
  */
  dairyCow: number;
  dairyFeed: number;
  dairySilage: number;
  dairybaleValue: number;
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
  /*
  pit
  */
  h: number;
  w: number;
  l: number;
  pitDim: number;

  constructor() {
  }


  calculateDairyCows(){
    if (this.dairySilage > 0 && this.dairyCow > 0) {
      let finalFeed = this.dairyCow * this.dairySilage * 1.6;
      this.dairyFeed = parseFloat(finalFeed.toFixed(2));
      this.dairybaleValue = this.dairyCow * this.dairySilage * 1.6 / 0.9;
    }
  }

  calculateFeed(){
    if (this.silage > 0 && this.cattle > 0) {
      let finalFeed = this.cattle * this.silage * 1.3;
      this.feedValue = parseFloat(finalFeed.toFixed(2));
      this.baleValue = this.cattle * this.silage * 1.3 / 0.9;
    }
  }

  calculateBales(){
    if(this.bales > 0 && this.sBales >= 0){
      let finalBales = (this.bales * 0.8 + this.sBales * 0.8) / 0.9;
      this.baleAMT = parseFloat(finalBales.toFixed(2));
    }
  }

  silagePit(){
    if(this.h > 0 && this.w > 0 && this.l > 0){
      let pitSize = (this.h * this.w * this.l) * 0.77;
      this.pitDim = parseFloat(pitSize.toFixed(2));
    }
  }

}
