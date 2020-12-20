import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoretypeRoutingModule } from './storetype-routing.module';
import { StoretypeComponent } from './storetype.component';
import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { AddstoretypeComponent } from './addstoretype/addstoretype.component';

@NgModule({
  declarations: [StoretypeComponent, AddstoretypeComponent],
  imports: [
    CommonModule,
    StoretypeRoutingModule,
    FormsModule, NgxDatatableModule
  ]
})
export class StoretypeModule { }
