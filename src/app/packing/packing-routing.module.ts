import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatepackingComponent } from './createpacking/createpacking.component';

import { PackingComponent } from './packing.component';

const routes: Routes = [{ path: '', component: PackingComponent },
{
  path: "addPacking",
  component: CreatepackingComponent,
},
{
  path: "edit-packing/:id",
  component: CreatepackingComponent,
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackingRoutingModule { }
