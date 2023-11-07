import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componete1Component } from './componete1/componete1.component';
import { Conponente2Component } from './conponente2/conponente2.component';

@NgModule({
  declarations: [
    AppComponent,
    Componete1Component,
    Conponente2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
