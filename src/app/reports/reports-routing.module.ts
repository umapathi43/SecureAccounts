import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReportsDetailsComponent } from "./reports-details/reports-details.component";

import { ReportsComponent } from "./reports.component";

const routes: Routes = [
  { path: "", component: ReportsComponent },
  { path: "details", component: ReportsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
