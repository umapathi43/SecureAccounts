import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SupplierRoutingModule } from "./supplier-routing.module";
import { SupplierComponent } from "./supplier.component";
import { AddsupplierComponent } from "./addsupplier/addsupplier.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [SupplierComponent, AddsupplierComponent],
  imports: [
    CommonModule,
    FormsModule,
    SupplierRoutingModule,
    NgxDatatableModule,
    NgbModule,
    NgxSpinnerModule,
  ],
  exports: [AddsupplierComponent],
})
export class SupplierModule {}
