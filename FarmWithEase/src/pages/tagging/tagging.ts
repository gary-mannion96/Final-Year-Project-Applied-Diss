import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddTagsPage } from '../add-tags/add-tags';
import { TaggingProvider } from '../../providers/tagging/tagging';

@Component({
  selector: 'page-tagging',
  templateUrl: 'tagging.html'
})
export class taggingPage {

  constructor(public navCtrl: NavController) {

  }

}
