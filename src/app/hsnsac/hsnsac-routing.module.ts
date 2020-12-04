import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddhsnsacComponent } from "./addhsnsac/addhsnsac.component";

import { HsnsacComponent } from "./hsnsac.component";

const routes: Routes = [
  { path: "", component: HsnsacComponent },
  {
    path: "createhsnsac",
    component: AddhsnsacComponent,
  },
  {
    path: "edit-hsnsac/:id",
    component: AddhsnsacComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HsnsacRoutingModule {}
