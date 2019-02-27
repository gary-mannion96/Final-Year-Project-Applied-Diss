import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddTagsPage } from '../add-tags/add-tags';
import { TaggingProvider } from '../../providers/tagging/tagging';

@Component({
  selector: 'page-tagging',
  templateUrl: 'tagging.html'
})
export class taggingPage {

  tags: any [] = [];

  constructor(public navCtrl: NavController, public taggingService: TaggingProvider, public modalCtrl: ModalController) {

  }
  ionViewDidLoad(){

    this.taggingService.getTags().then((data) => {
      console.log(data);
      this.tags = data;
    });

  }

  addTag(){

    let modal = this.modalCtrl.create(AddTagsPage);

    modal.onDidDismiss(tag => {
      if(tag){
        this.tags.push(tag);
        this.taggingService.createTags(tag);
      }
    });

    modal.present();

  }

  deleteTag(tag){

    //Remove locally
      let index = this.tags.indexOf(tag);

      if(index > -1){
        this.tags.splice(index, 1);
      }

    //Remove from database
    this.taggingService.deleteTags(tag._id);
  }

}
