import { Component, OnInit } from "@angular/core";
import {
  NgbDateStruct,
  NgbDatepickerI18n,
  NgbCalendar,
} from "@ng-bootstrap/ng-bootstrap";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-createuser",
  templateUrl: "./createuser.component.html",
  styleUrls: ["./createuser.component.scss"],
})
export class CreateuserComponent implements OnInit {
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
