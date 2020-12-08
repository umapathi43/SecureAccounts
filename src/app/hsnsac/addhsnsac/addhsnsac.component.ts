import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HsnandsacService } from "app/services/hsnandsac.service";
import { Location } from "@angular/common";
import { ToastrService } from "ngx-toastr";
export class HsnSac {
  public id: number;
  public hsnName: string;
  public descirption: string;
}
@Component({
  selector: "app-addhsnsac",
  templateUrl: "./addhsnsac.component.html",
  styleUrls: ["./addhsnsac.component.scss"],
})
export class AddhsnsacComponent implements OnInit {
  CustomeId: any;
  model = new HsnSac();
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private toastr: ToastrService,
    private _hsnService: HsnandsacService
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getHSNById();
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
    this._hsnService.addHSN(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "HSN Added");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to add HSN");
      }
    });
  }
  onUpdate(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._hsnService.updateHSN(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "HSN Updated");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to update HSN");
      }
    });
  }
  getHSNById() {
    const dta = {
      id: this.CustomeId,
    };
    this._hsnService.getHSNById(dta).subscribe((ok) => {
      console.log(ok);
      this.model = ok;
    });
  }
}
