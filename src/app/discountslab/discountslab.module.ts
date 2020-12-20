import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscountslabRoutingModule } from './discountslab-routing.module';
import { DiscountslabComponent } from './discountslab.component';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { AdddiscountslabComponent } from './adddiscountslab/adddiscountslab.component';

@NgModule({
  declarations: [DiscountslabComponent, AdddiscountslabComponent],
  imports: [
    CommonModule,
    FormsModule,
    DiscountslabRoutingModule,
    NgxDatatableModule,
    NgbModule,
  ]
})
export class DiscountslabModule { }
