import { Injectable } from '@angular/core';

let configKeyName:string = "config";

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  constructor() {
  }

  //Recupera os dados do localstorage
  getConfigData(): any{
    return localStorage.getItem(configKeyName);
  }

  //Grava os dados no localstorage
  setConfigDAta(showSlide?: boolean, name?: string, userName?: string){
    let config ={
      showSlide: false,
      name: "",
      userName: ""
    }

    if(showSlide){
      config.showSlide = showSlide;
    }

    if(name){
      config.name = name;
    }

    if(userName){
      config.userName = userName;
    }

    localStorage.setItem(configKeyName, JSON.stringify(config));
  }
}
