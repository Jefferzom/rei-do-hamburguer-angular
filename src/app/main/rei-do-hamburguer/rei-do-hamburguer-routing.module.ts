import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReiDoHamburguerComponent } from './rei-do-hamburguer.component';

const routes: Routes = [{ path: '', component: ReiDoHamburguerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReiDoHamburguerRouting {}
