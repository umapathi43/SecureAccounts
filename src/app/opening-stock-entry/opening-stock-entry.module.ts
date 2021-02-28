import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OpeningStockEntryRoutingModule } from "./opening-stock-entry-routing.module";
import { OpeningStockEntryComponent } from "./opening-stock-entry.component";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { OpeningStockEntryTableComponent } from './opening-stock-entry-table/opening-stock-entry-table.component';

@NgModule({
  declarations: [OpeningStockEntryComponent, OpeningStockEntryTableComponent],
  imports: [
    CommonModule,
    OpeningStockEntryRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    NgxDatatableModule,
  ],
})
export class OpeningStockEntryModule {}
