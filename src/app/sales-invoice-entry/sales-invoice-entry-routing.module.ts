import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesInvoiceEntryComponent } from './sales-invoice-entry.component';

const routes: Routes = [{ path: '', component: SalesInvoiceEntryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesInvoiceEntryRoutingModule { }
