import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockAdjustmentEntryComponent } from './stock-adjustment-entry.component';

const routes: Routes = [{ path: '', component: StockAdjustmentEntryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockAdjustmentEntryRoutingModule { }
