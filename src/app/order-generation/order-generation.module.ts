import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OrderGenerationRoutingModule } from "./order-generation-routing.module";
import { OrderGenerationComponent } from "./order-generation.component";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

@NgModule({
  declarations: [OrderGenerationComponent],
  imports: [
    CommonModule,
    OrderGenerationRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    NgxDatatableModule,
  ],
})
export class OrderGenerationModule {}
