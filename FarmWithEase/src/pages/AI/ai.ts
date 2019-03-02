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


}
