import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { ReiDoHamburguerCtoComponent } from './rei-do-hamburguer-cto/rei-do-hamburguer-cto.component';
import { ReiDoHamburguerLocalizeComponent } from './rei-do-hamburguer-localize/rei-do-hamburguer-localize.component';
import { ReiDoHamburguerInformationComponent } from './rei-do-hamburguer-information/rei-do-hamburguer-information.component';

@NgModule({
  declarations: [
    ReiDoHamburguerCtoComponent,
    ReiDoHamburguerLocalizeComponent,
    ReiDoHamburguerInformationComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RouterModule,
    ReiDoHamburguerCtoComponent,
    ReiDoHamburguerLocalizeComponent,
    ReiDoHamburguerInformationComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReiDoHamburguerModule { }
