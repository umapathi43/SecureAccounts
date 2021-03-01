import { PurchaseOrderTableComponent } from "./purchase-order-table/purchase-order-table.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PurchaseOrderComponent } from "./purchase-order.component";

const routes: Routes = [
  { path: "", component: PurchaseOrderTableComponent },
  { path: "purchase-order-details", component: PurchaseOrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseOrderRoutingModule {}
