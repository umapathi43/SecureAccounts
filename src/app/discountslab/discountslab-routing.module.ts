import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdddiscountslabComponent } from "./adddiscountslab/adddiscountslab.component";

import { DiscountslabComponent } from "./discountslab.component";

const routes: Routes = [
  { path: "", component: DiscountslabComponent },
  {
    path: "adddiscountslab",
    component: AdddiscountslabComponent,
  },
  {
    path: "edit-discountslab/:id",
    component: AdddiscountslabComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscountslabRoutingModule {}
