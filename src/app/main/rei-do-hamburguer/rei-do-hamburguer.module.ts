import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReiDoHamburguerComponent } from './rei-do-hamburguer.component';

// Components

import { ReiDoHamburguerCtoComponent } from './rei-do-hamburguer-cto/rei-do-hamburguer-cto.component';
import { ReiDoHamburguerLocalizeComponent } from './rei-do-hamburguer-localize/rei-do-hamburguer-localize.component';
import { ReiDoHamburguerInformationComponent } from './rei-do-hamburguer-information/rei-do-hamburguer-information.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ReiDoHamburguerComponent,
    ReiDoHamburguerCtoComponent,
    ReiDoHamburguerLocalizeComponent,
    ReiDoHamburguerInformationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
  ]
})
export class ReiDoHamburguerModule { }
