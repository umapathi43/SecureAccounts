import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AreaRoutingModule } from "./area-routing.module";
import { AreaComponent } from "./area.component";
import { CreateareaComponent } from "./createarea/createarea.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AreaComponent, CreateareaComponent],
  imports: [
    CommonModule,
    FormsModule,
    AreaRoutingModule,
    NgxDatatableModule,
    NgbModule,
  ],
})
export class AreaModule {}
