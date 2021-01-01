import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpeningStockEntryComponent } from './opening-stock-entry.component';

const routes: Routes = [{ path: '', component: OpeningStockEntryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpeningStockEntryRoutingModule { }
