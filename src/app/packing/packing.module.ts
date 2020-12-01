import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackingRoutingModule } from './packing-routing.module';
import { PackingComponent } from './packing.component';
import { CreatepackingComponent } from './createpacking/createpacking.component';


@NgModule({
  declarations: [PackingComponent, CreatepackingComponent],
  imports: [
    CommonModule,
    PackingRoutingModule
  ]
})
export class PackingModule { }
