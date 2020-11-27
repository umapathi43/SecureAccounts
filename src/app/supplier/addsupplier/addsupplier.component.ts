import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
@Component({
  selector: "app-addsupplier",
  templateUrl: "./addsupplier.component.html",
  styleUrls: ["./addsupplier.component.scss"],
})
export class AddsupplierComponent implements OnInit {
  popupModel: Date;
  CustomeId: any;

  constructor(private _location: Location, private actRoute: ActivatedRoute) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
  }

  ngOnInit(): void {}
  goBack() {
    this._location.back();
  }
}
