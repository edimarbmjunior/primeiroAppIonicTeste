import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AtletaProvider } from '../../providers/atleta/atleta';

/**
 * Generated class for the AtletaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-atleta',
  templateUrl: 'atleta.html',
})
export class AtletaPage {

  public listaAtletas = new Array<any>();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private cartolaProvider: AtletaProvider) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter AtletaPage');
    this.carregaAtleta();
  }

  carregaAtleta(){
    this.cartolaProvider.atletas().subscribe(data=>{
      const response = (data as any);
      console.log(`Dados: ${response}`);
    }, error=>{
      console.log(`Concole: ${error}`);
    });
  }

}
