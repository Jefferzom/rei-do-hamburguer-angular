import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReiDoHamburguerModule } from '../app/main/rei-do-hamburguer/rei-do-hamburguer.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReiDoHamburguerComponent } from './main/rei-do-hamburguer/rei-do-hamburguer.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ReiDoHamburguerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReiDoHamburguerModule,
    SharedModule.forRoot(),
    SharedModule
  ],
  exports: [
    ReiDoHamburguerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
