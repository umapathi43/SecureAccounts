import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CounterSaleComponent } from './counter-sale.component';

const routes: Routes = [{ path: '', component: CounterSaleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterSaleRoutingModule { }
