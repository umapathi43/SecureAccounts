import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ManufactureService } from "app/services/manufacture.service";
import { ToastrService } from "ngx-toastr";
export class Manufacturer {
  public id: number;
  public manufacturerName: string;
}
@Component({
  selector: "app-addmanufacturer",
  templateUrl: "./addmanufacturer.component.html",
  styleUrls: ["./addmanufacturer.component.scss"],
})
export class AddmanufacturerComponent implements OnInit {
  CustomeId: any;
  model = new Manufacturer();
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _manfService: ManufactureService,
    private toastr: ToastrService
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getManufactureById();
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
    this._manfService.addManfacture(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Stock Updated");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to update Stock");
      }
    });
  }

  onUpdate(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._manfService.updateManfacture(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Stock Updated");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to update Stock");
      }
    });
  }
  getManufactureById() {
    const dta = {
      id: this.CustomeId,
    };
    this._manfService.getManfactureById(dta).subscribe((ok) => {
      console.log(ok);
      this.model = ok;
      document.getElementById("frmcbdy").click();
    });
  }
}
