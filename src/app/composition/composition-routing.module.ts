import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddcompositionComponent } from "./addcomposition/addcomposition.component";

import { CompositionComponent } from "./composition.component";

const routes: Routes = [
  { path: "", component: CompositionComponent },
  {
    path: "createcomposition",
    component: AddcompositionComponent,
  },
  {
    path: "edit-composition/:id",
    component: AddcompositionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompositionRoutingModule {}
