import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Http } from '@angular/http';

/*
  Generated class for the AtletaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AtletaProvider {
  basePath = "/cartolaapi";

  constructor(
    public http: Http,
    private plataform: Platform) {
    if(this.plataform.is("cordova")){
      this.basePath = "https://api.cartolafc.globo.com";
    }
  }

  atletas(){
    return this.http.get(`${this.basePath}/auth/atletas/mercado`)
  }

}
