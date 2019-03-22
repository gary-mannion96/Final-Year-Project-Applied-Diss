import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddReportsPage } from './add-reports';

@NgModule({
  declarations: [
    AddReportsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddReportsPage),
  ],
})
export class AddReportsPageModule {}
