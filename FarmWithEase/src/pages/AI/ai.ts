import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddAisPage } from '../add-ais/add-ais';
import { AiingProvider } from '../../providers/ai/aiing';

@Component({
  selector: 'page-AI',
  templateUrl: 'ai.html'
})
export class AIPage {
  ais: any [] = [];

  constructor(public navCtrl: NavController, public aiingService: AiingProvider, public modalCtrl: ModalController) {

  }
  ionViewDidLoad(){

    this.aiingService.getAis().then((data) => {
      console.log(data);
      this.ais = data;
    });

  }

  addAi(){

    let modal = this.modalCtrl.create(AddAisPage);

    modal.onDidDismiss(ai => {
      if(ai){
        this.ais.push(ai);
        this.aiingService.createAis(ai);
      }
    });

    modal.present();

  }

  deleteAi(ai){

    //Remove locally
      let index = this.ais.indexOf(ai);

      if(index > -1){
        this.ais.splice(index, 1);
      }

    //Remove from database
    this.aiingService.deleteAis(ai._id);
  }
}
