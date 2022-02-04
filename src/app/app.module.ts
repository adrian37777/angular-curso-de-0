import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({ // decorador
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HeroesModule,
    contadorModule
  ],
  providers: [], // servicios
  bootstrap: [AppComponent] // componente principal que lanza primera vez
})
export class AppModule { }
