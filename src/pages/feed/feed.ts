import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nomeUsuario:string = "Edimar do código";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  somarDoisNumeros(num1: number, num2: number): number{
    return num1 + num2;
  }

  ionViewDidLoad() {
    console.log('Comando ionViewDidLoad é utilizado para executar algo ante de carregar a pagina vinculada ao typescript.');
    console.log('Porém só executa na primeira chamada da página.');
    //alert(this.somarDoisNumeros(5, 8));
  }

}
