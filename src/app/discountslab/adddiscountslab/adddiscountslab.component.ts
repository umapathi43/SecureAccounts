import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { DiscountslabService } from "app/services/discountslab.service";
export class DiscountSlab {
  public discountSlabName: string;
  public route: any;
  public id: number;
  public from_amt: any;
  public to_amt: any;
  public discount: any;
}
@Component({
  selector: "app-adddiscountslab",
  templateUrl: "./adddiscountslab.component.html",
  styleUrls: ["./adddiscountslab.component.scss"],
})
export class AdddiscountslabComponent implements OnInit {
  CustomeId: any;
  model = new DiscountSlab();
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _discountService: DiscountslabService
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getDiscountslabById();
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
    this._discountService.addDiscount(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this._location.back();
      } else {
      }
    });
  }
  onUpdate(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._discountService.updateDiscount(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this._location.back();
      } else {
      }
    });
  }
  getDiscountslabById() {
    const dta = {
      id: this.CustomeId,
    };
    this._discountService.getDiscountById(dta).subscribe((ok) => {
      console.log(ok);
      this.model = ok;
    });
  }
}
