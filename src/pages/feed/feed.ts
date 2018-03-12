import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams, IonicApp } from 'ionic-angular';
import { App, IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { FilmeDetalhePage } from '../filme-detalhe/filme-detalhe';

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
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public page:number = 1;
  public infiniteScroll;

  constructor(
    public appCtrl: App,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProviders: MovieProvider,
    //Objeto com metodos para carregamento de pagina
    public loadingCtrl: LoadingController
  ){}

  carregandoPagina() {
    this.loader = this.loadingCtrl.create({
      content: "Espere por favor...",
    });
    this.loader.present();
  }

  fechaCarregamento(){
    this.loader.dismiss();
  }

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

  ionViewDidEnter() {
    console.log('Comando ionViewDidEnter é utilizado para executar algo antes de ');
    console.log('carregar a pagina vinculada ao typescript. Executa sempre.');
    this.carregarFilme();
  }

  doInfinite(infiniteScroll){
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilme(true);
  }

  carregarFilme(newPage: boolean = false){
    //aciona o aviso de carregamento de pagina
    this.carregandoPagina();
    this.movieProviders.getMoviesPopular(this.page).subscribe(
      data=>{
        const response = (data as any);
        console.log(response);
        const objetoRetorno = JSON.parse(response._body);
        if(newPage){
          this.listaFilmes = this.listaFilmes.concat(objetoRetorno.results);
          this.infiniteScroll.complete();
        }else{
          this.listaFilmes = objetoRetorno.results;
        }
        //this.mudarValorData(this.listaFilmes);
        console.log(objetoRetorno);
        //retira o aviso de carregamento de pagina
        this.fechaCarregamento();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }, error => {
        console.log("Erro: " + error);
        this.fechaCarregamento();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }
    );
  }

  //Só carrega uma vez
  /* ionViewDidLoad() {
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
  } */

  mudarValorData(lista: Array<any>){
    lista.forEach(element => {
      element.release_date = new Date(element.release_date).toLocaleDateString();
    });
  }

  atualizar(refresher){
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilme();
  }

  abrirDetalhes(filme){
    this.navCtrl.push(FilmeDetalhePage, {id: filme.id});
  }

}
