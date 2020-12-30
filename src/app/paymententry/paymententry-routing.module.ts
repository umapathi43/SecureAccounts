import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PaymententryComponent } from "./paymententry.component";

const routes: Routes = [{ path: "", component: PaymententryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymententryRoutingModule {}
