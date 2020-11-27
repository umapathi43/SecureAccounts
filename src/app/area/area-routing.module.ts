import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AreaComponent } from "./area.component";
import { CreateareaComponent } from "./createarea/createarea.component";

const routes: Routes = [
  { path: "", component: AreaComponent },
  {
    path: "createarea",
    component: CreateareaComponent,
  },
  {
    path: "edit-area/:id",
    component: CreateareaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaRoutingModule {}
