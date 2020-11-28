import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdditemComponent } from "./additem/additem.component";

import { ItemsComponent } from "./items.component";

const routes: Routes = [
  { path: "", component: ItemsComponent },
  {
    path: "additem",
    component: AdditemComponent,
  },
  {
    path: "edit-item/:id",
    component: AdditemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsRoutingModule {}
