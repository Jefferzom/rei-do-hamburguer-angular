import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReiDoHamburguerModule } from '../app/main/rei-do-hamburguer/rei-do-hamburguer.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Components
import { ReiDoHamburguerComponent } from './main/rei-do-hamburguer/rei-do-hamburguer.component';
import { ReiDoHamburguerFooterComponent } from './shared/components/rei-do-hamburguer-footer/rei-do-hamburguer-footer.component';
import { ReiDoHamburguerHeaderComponent } from './shared/components/rei-do-hamburguer-header/rei-do-hamburguer-header.component';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    ReiDoHamburguerComponent,
    ReiDoHamburguerFooterComponent,
    ReiDoHamburguerHeaderComponent,
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
