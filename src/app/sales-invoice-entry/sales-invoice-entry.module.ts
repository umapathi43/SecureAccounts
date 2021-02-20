import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SalesInvoiceEntryRoutingModule } from "./sales-invoice-entry-routing.module";
import { SalesInvoiceEntryComponent } from "./sales-invoice-entry.component";
import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SupplierModule } from "app/supplier/supplier.module";

@NgModule({
  declarations: [SalesInvoiceEntryComponent],
  imports: [
    CommonModule,
    SalesInvoiceEntryRoutingModule,
    FormsModule,
    NgxDatatableModule,
    NgxSpinnerModule,
    NgSelectModule,
    NgbModule,
    SupplierModule,
  ],
})
export class SalesInvoiceEntryModule {}
