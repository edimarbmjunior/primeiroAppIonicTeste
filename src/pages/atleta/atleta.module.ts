import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtletaPage } from './atleta';

@NgModule({
  declarations: [
    AtletaPage,
  ],
  imports: [
    IonicPageModule.forChild(AtletaPage),
  ],
})
export class AtletaPageModule {}
