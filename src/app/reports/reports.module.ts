import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReportsRoutingModule } from "./reports-routing.module";
import { ReportsComponent } from "./reports.component";
import { ReportsDetailsComponent } from "./reports-details/reports-details.component";
import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [ReportsComponent, ReportsDetailsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    FormsModule,
    NgxDatatableModule,
    NgxSpinnerModule,
    NgSelectModule,
    NgbModule,
  ],
})
export class ReportsModule {}
