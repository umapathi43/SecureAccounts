import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddmanufacturerComponent } from "./addmanufacturer/addmanufacturer.component";

import { ManufacturerComponent } from "./manufacturer.component";

const routes: Routes = [
  { path: "", component: ManufacturerComponent },
  {
    path: "createmanufacturer",
    component: AddmanufacturerComponent,
  },
  {
    path: "edit-manufacturer/:id",
    component: AddmanufacturerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManufacturerRoutingModule {}
