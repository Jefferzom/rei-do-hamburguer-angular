import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReiDoHamburguerComponent } from './main/rei-do-hamburguer/rei-do-hamburguer.component';

const routes: Routes = [
  {
    path: '',
    component: ReiDoHamburguerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
