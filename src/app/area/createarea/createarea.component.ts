import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { AreaService } from "app/services/area.service";
import { ToastrService } from "ngx-toastr";
export class Area {
  public areaName: string;
  public route: any;
  public id: number;
}
@Component({
  selector: "app-createarea",
  templateUrl: "./createarea.component.html",
  styleUrls: ["./createarea.component.scss"],
})
export class CreateareaComponent implements OnInit {
  CustomeId: any;
  routeList: any;
  model = new Area();
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _areaService: AreaService,
    private toastr: ToastrService
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getAreaById();
    }
  }

  ngOnInit(): void {
    this.getRoutes();
  }
  goBack() {
    this._location.back();
  }
  getRoutes() {
    this._areaService.getRoutes().subscribe((ok) => {
      console.log(ok);
      this.routeList = ok;
    });
  }
  onSubmit(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._areaService.addArea(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Area Updated");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to update Area");
      }
    });
  }
  onUpdate(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._areaService.updateArea(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Area Updated");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to update Area");
      }
    });
  }
  getAreaById() {
    const dta = {
      id: this.CustomeId,
    };
    this._areaService.getAreaById(dta).subscribe((ok) => {
      console.log(ok);
      this.model = ok;
    });
  }
}
