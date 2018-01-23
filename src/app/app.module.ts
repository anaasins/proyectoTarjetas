import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MiEvento } from './eventos';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    MiEvento
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
