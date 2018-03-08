import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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
  providers:[
    MovieProvider
  ]
})
export class FeedPage {

  public nomeUsuario:string = "Edimar do código";
  public listaFilmes = new Array<any>();
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProviders: MovieProvider
  )
    { }

  public objet_feed_unico = {
    titulo:"Edimar Jr",
    data:"November 5, 1955",
    descricao:"Estou começando no ionic. Coloquei as imagens.",
    qntdLikes: 12,
    qntdComents: 4,
    timeComent: "11h ago"
  };

  public objet_feed = { objeto: 
    [
      {
        titulo:"Edimar Jr2",
        data:"November 5, 1955",
        descricao:"Estou começando no ionic. Coloquei as imagens.",
        qntdLikes: 12,
        qntdComents: 4,
        timeComent: "11h ago"
      },
      {
        titulo:"Edimar Jr3",
        data:"November 5, 1955",
        descricao:"Estou começando no ionic. Coloquei as imagens.",
        qntdLikes: 12,
        qntdComents: 4,
        timeComent: "11h ago"
      }
    ] 
  };

  ionViewDidLoad() {
    console.log('Comando ionViewDidLoad é utilizado para executar algo ante de carregar a pagina vinculada ao typescript.');
    console.log('Porém só executa na primeira chamada da página.');

    this.movieProviders.getMoviesPopular().subscribe(
      data=>{
        const response = (data as any);
        console.log(response);
        const objetoRetorno = JSON.parse(response._body);
        this.listaFilmes = objetoRetorno.results;
        //this.mudarValorData(this.listaFilmes);
        console.log(objetoRetorno);
      }, error => {
        console.log("Erro: " + error);
      });
  }

  mudarValorData(lista: Array<any>){
    lista.forEach(element => {
      element.release_date = new Date(element.release_date).toLocaleDateString();
    });
  }

}
