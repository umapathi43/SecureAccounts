import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BatchDetailsRoutingModule } from "./batch-details-routing.module";
import { BatchDetailsComponent } from "./batch-details.component";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

@NgModule({
  declarations: [BatchDetailsComponent],
  imports: [
    CommonModule,
    BatchDetailsRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    NgxDatatableModule,
  ],
})
export class BatchDetailsModule {}
