import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TituloDirective } from './titulo.directive';
import { LabelDirective } from './label.directive';
import { MiEvento } from './evento';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    TituloDirective,
    LabelDirective,
    MiEvento
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
