import { Component } from '@angular/core';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {
  cattle: number;
  silage: number;
  feedValue: number;
  feedMessage: string;

  constructor() {
  }

  calculateFeed(){
    if (this.silage > 0 && this.cattle > 0) {
      let finalFeed = this.cattle * this.silage * 1.6;
      this.feedValue = parseFloat(finalFeed.toFixed(2));
    }
  }

}
