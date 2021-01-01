import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OpeningStockEntryRoutingModule } from "./opening-stock-entry-routing.module";
import { OpeningStockEntryComponent } from "./opening-stock-entry.component";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

@NgModule({
  declarations: [OpeningStockEntryComponent],
  imports: [
    CommonModule,
    OpeningStockEntryRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    NgxDatatableModule,
  ],
})
export class OpeningStockEntryModule {}
