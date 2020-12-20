import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsersComponent, CreateuserComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    NgxDatatableModule,
    NgbModule
  ]
})
export class UsersModule { }
