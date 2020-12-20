import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SalesmanRoutingModule } from "./salesman-routing.module";
import { SalesmanComponent } from "./salesman.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { AddsalesmanComponent } from './addsalesman/addsalesman.component';

@NgModule({
  declarations: [SalesmanComponent, AddsalesmanComponent],
  imports: [
    CommonModule,
    FormsModule,
    SalesmanRoutingModule,
    NgxDatatableModule,
    NgbModule,
  ],
})
export class SalesmanModule {}
