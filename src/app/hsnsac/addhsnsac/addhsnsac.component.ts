import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
@Component({
  selector: "app-addhsnsac",
  templateUrl: "./addhsnsac.component.html",
  styleUrls: ["./addhsnsac.component.scss"],
})
export class AddhsnsacComponent implements OnInit {
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
