import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderGenerationComponent } from './order-generation.component';

const routes: Routes = [{ path: '', component: OrderGenerationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderGenerationRoutingModule { }
