import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroPage } from '../pages/intro/intro';
import { IntroPageModule } from '../pages/intro/intro.module';
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { FilmeDetalhePageModule } from '../pages/filme-detalhe/filme-detalhe.module';
import { AtletaProvider } from '../providers/atleta/atleta';
import { AtletaPageModule } from '../pages/atleta/atleta.module';

@NgModule({
  declarations: [
    MyApp,
    // Posso usar assim ou utlizar o imports e colocar o FeedPageModule,
    // com as declarations, imports e imports, no modulo do FeedPage
    // Caso contrario, não exista o modulo da pagina criada, usar este tipo de inserção
    //FeedPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    // Posso usar assim ou utlizar o declarations com entryComponents, nos dois irei utilizar o FeedPage
    // Caso contrario, não exista o modulo da pagina criada, não usar este tipo de inserção
    FeedPageModule,
    IntroPageModule,
    ConfiguracoesPageModule,
    SobrePageModule,
    PerfilPageModule,
    FilmeDetalhePageModule,
    AtletaPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //FeedPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // O provider a baixo está declarado em FeedPage.ts, por isso não precisa ficar no global
    //MovieProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AtletaProvider
  ]
})
export class AppModule {}
