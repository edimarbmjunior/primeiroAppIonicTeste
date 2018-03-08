import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApiPath:string = "https://api.themoviedb.org/3";
  private baseApiKey:string = "?api_key=719a289dda430f6f326d6885ce6279c8";
  private baseApiKeyLanguage:string = "&language=pt-BR";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(){
    return this.http.get(this.baseApiPath + "/movie/latest" + this.baseApiKey + this.baseApiKeyLanguage);
  }

  getMoviesPopular(){
    return this.http.get(this.baseApiPath + "/movie/popular" + this.baseApiKey + this.baseApiKeyLanguage);
  }

  getMoviesLanguage(){
    return this.http.get(this.baseApiPath + "/movie/76341" + this.baseApiKey + this.baseApiKeyLanguage);
  }
}
