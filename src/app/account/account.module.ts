import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccountRoutingModule } from "./account-routing.module";
import { AccountComponent } from "./account.component";
import { CreateaccountComponent } from "./createaccount/createaccount.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AccountComponent, CreateaccountComponent],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
    NgxDatatableModule,
    NgbModule,
  ],
})
export class AccountModule {}
