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
      let finalFeed = this.silage / (this.cattle / 100 * this.cattle / 100);
      this.feedValue = parseFloat(finalFeed.toFixed(2));
      this.setFeedMessage();
    }
  }

  private setFeedMessage() {
    if (this.feedValue < 18.5) {
      this.feedMessage = "Not enough silage"
    }
  
    if (this.feedValue > 18.5 && this.feedValue < 25) {
      this.feedMessage = "Perfect amount"
    }
  
    if (this.feedValue > 30) {
      this.feedMessage = "Too Much"
    }
  }
}
