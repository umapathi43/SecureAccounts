import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItemsRoutingModule } from "./items-routing.module";
import { ItemsComponent } from "./items.component";
import { AdditemComponent } from "./additem/additem.component";
import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
  declarations: [ItemsComponent, AdditemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ItemsRoutingModule,
    NgxDatatableModule,
    NgbModule,
    NgSelectModule,
  ],
})
export class ItemsModule {}
