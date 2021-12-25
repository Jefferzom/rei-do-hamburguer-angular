import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReiDoHamburguerComponent } from './rei-do-hamburguer.component';

const routes: Routes = [
  {
    path: 'home',
    component: ReiDoHamburguerComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class ReiDoHamburguerRouting { }
