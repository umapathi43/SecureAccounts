import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { AreaService } from "app/services/area.service";
import { SalesmanService } from "app/services/salesman.service";
export class SalesBoy {
  public salesManName: string;
  public incentive: any;
  public target: number;
  public areaCreation: any = {
    id: "",
  };
}
@Component({
  selector: "app-addsalesman",
  templateUrl: "./addsalesman.component.html",
  styleUrls: ["./addsalesman.component.scss"],
})
export class AddsalesmanComponent implements OnInit {
  CustomeId: any;
  model = new SalesBoy();
  areaList: any;
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _areaService: AreaService,
    private _salesService: SalesmanService
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getSalesBoyById();
    }
  }

  ngOnInit(): void {
    this.getAreas();
  }
  goBack() {
    this._location.back();
  }
  onSubmit(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._salesService.addSalesman(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this._location.back();
      } else {
      }
    });
  }
  getAreas() {
    this._areaService.getAreas().subscribe((ok) => {
      console.log(ok);
      this.areaList = ok;
    });
  }
  onUpdate(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._salesService.updateSalesman(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this._location.back();
      } else {
      }
    });
  }
  getSalesBoyById() {
    const dta = {
      id: this.CustomeId,
    };
    this._salesService.getSalesmanById(dta).subscribe((ok) => {
      console.log(ok);
      this.model = ok;
    });
  }
}
