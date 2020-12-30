import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PaymententryRoutingModule } from "./paymententry-routing.module";
import { PaymententryComponent } from "./paymententry.component";

import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [PaymententryComponent],
  imports: [
    CommonModule,
    PaymententryRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    NgxDatatableModule,
  ],
})
export class PaymententryModule {}
