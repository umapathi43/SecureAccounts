import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { StoretypeService } from "app/services/storetype.service";
import { ToastrService } from "ngx-toastr";
export class storeType {
  public storeTypeName: string;
  public id: number;
}
@Component({
  selector: "app-addstoretype",
  templateUrl: "./addstoretype.component.html",
  styleUrls: ["./addstoretype.component.scss"],
})
export class AddstoretypeComponent implements OnInit {
  CustomeId: any;
  model = new storeType();
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _storeService: StoretypeService,
    private toastr: ToastrService
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getStoreTypeById();
    }
  }

  ngOnInit(): void {}
  goBack() {
    this._location.back();
  }
  onSubmit(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._storeService.addStoreType(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Storetype Added");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to update Storetype");
      }
    });
  }

  onUpdate(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._storeService.updateStoreType(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Storetype Updated");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to update Storetype");
      }
    });
  }
  getStoreTypeById() {
    const dta = {
      id: this.CustomeId,
    };
    this._storeService.getStoreTypeById(dta).subscribe((ok) => {
      console.log(ok);
      this.model = ok;
      document.getElementById("frmcard").click();
    });
  }
}
