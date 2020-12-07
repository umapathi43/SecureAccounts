import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
@Component({
  selector: "app-addschedule",
  templateUrl: "./addschedule.component.html",
  styleUrls: ["./addschedule.component.scss"],
})
export class AddscheduleComponent implements OnInit {
  model: any;
  CustomeId: any;
  constructor(private _location: Location, private actRoute: ActivatedRoute) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
    }
  }

  ngOnInit(): void {}
  goBack() {
    this._location.back();
  }
}
