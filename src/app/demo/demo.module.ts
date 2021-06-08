import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BotonesComponent } from './botones/botones.component';


@NgModule({
  declarations: [
    BotonesComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class DemoModule { }
