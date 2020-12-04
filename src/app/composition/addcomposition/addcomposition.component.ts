import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
@Component({
  selector: "app-addcomposition",
  templateUrl: "./addcomposition.component.html",
  styleUrls: ["./addcomposition.component.scss"],
})
export class AddcompositionComponent implements OnInit {
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
