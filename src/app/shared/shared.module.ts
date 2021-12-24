import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { ReiDoHamburguerHeaderComponent } from './components/rei-do-hamburguer-header/rei-do-hamburguer-header.component';
import { ReiDoHamburguerFooterComponent } from './components/rei-do-hamburguer-footer/rei-do-hamburguer-footer.component';

@NgModule({
  declarations: [
    ReiDoHamburguerHeaderComponent,
    ReiDoHamburguerFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReiDoHamburguerHeaderComponent,
    ReiDoHamburguerFooterComponent
  ]
})
export class SharedModule {
}
