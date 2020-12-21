import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackingRoutingModule } from './packing-routing.module';
import { PackingComponent } from './packing.component';
import { CreatepackingComponent } from './createpacking/createpacking.component';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [PackingComponent, CreatepackingComponent],
  imports: [
    CommonModule,
    PackingRoutingModule,
    FormsModule,
    NgxDatatableModule,
    NgbModule,
    NgxSpinnerModule
  ]
})
export class PackingModule { }
