import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompositionRoutingModule } from './composition-routing.module';
import { CompositionComponent } from './composition.component';
import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { AddcompositionComponent } from './addcomposition/addcomposition.component';

@NgModule({
  declarations: [CompositionComponent, AddcompositionComponent],
  imports: [
    CommonModule,
    CompositionRoutingModule,
    FormsModule,
    NgxDatatableModule
  ]
})
export class CompositionModule { }
