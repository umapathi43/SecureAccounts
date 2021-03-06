import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GroupRoutingModule } from "./group-routing.module";
import { GroupComponent } from "./group.component";
import { AddgroupComponent } from "./addgroup/addgroup.component";
import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [GroupComponent, AddgroupComponent],
  imports: [
    CommonModule,
    GroupRoutingModule,
    FormsModule,
    NgxDatatableModule,
    NgxSpinnerModule,
  ],
})
export class GroupModule {}
