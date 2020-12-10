import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PurchaseComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    FormsModule
  ]
})
export class PurchaseModule { }
