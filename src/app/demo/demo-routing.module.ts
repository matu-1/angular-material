import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonesComponent } from './botones/botones.component';

const routes: Routes = [
  {
    path: "botones",
    component: BotonesComponent,
  },
  {
    path: "**",
    redirectTo: 'botones'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
