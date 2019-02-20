import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BullPage } from './bull';

@NgModule({
  declarations: [
    BullPage,
  ],
  imports: [
    IonicPageModule.forChild(BullPage),
  ],
})
export class BullPageModule {}
