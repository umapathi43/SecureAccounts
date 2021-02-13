import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesOrderComponent } from './sales-order.component';

const routes: Routes = [{ path: '', component: SalesOrderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesOrderRoutingModule { }
