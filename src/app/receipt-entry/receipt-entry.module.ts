import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReceiptEntryRoutingModule } from "./receipt-entry-routing.module";
import { ReceiptEntryComponent } from "./receipt-entry.component";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [ReceiptEntryComponent],
  imports: [
    CommonModule,
    ReceiptEntryRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    NgxDatatableModule,
    NgSelectModule,
    NgbModule,
  ],
})
export class ReceiptEntryModule {}
