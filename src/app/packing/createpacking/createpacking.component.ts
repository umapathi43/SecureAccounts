import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { PackingService } from "app/services/packing.service";
import { ToastrService } from "ngx-toastr";
export class Packing {
  public id: any;
  public packName: any;
  public qty: any;
}

@Component({
  selector: "app-createpacking",
  templateUrl: "./createpacking.component.html",
  styleUrls: ["./createpacking.component.scss"],
})
export class CreatepackingComponent implements OnInit {
  CustomeId: any;
  model = new Packing();
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _packService: PackingService,
    private toastr: ToastrService
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getPackById();
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
    this._packService.addPack(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Pack Added");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to update Pack");
      }
    });
  }

  onUpdate(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._packService.updatePack(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Pack Updated");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to update Pack");
      }
    });
  }
  getPackById() {
    const dta = {
      id: this.CustomeId,
    };
    this._packService.getPackById(dta).subscribe((ok) => {
      console.log(ok);
      this.model = ok;
      document.getElementById("frmcard").click();
    });
  }
}
