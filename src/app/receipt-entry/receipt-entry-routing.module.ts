import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceiptEntryComponent } from './receipt-entry.component';

const routes: Routes = [{ path: '', component: ReceiptEntryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiptEntryRoutingModule { }
