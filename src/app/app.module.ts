import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReiDoHamburguerModule } from 'src/main/rei-do-hamburguer/rei-do-hamburguer.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReiDoHamburguerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
