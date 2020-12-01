import { Component, OnInit } from "@angular/core";
import {
  NgbDateStruct,
  NgbDatepickerI18n,
  NgbCalendar,
} from "@ng-bootstrap/ng-bootstrap";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "app/services/user.service";
export class User {
  public customerName: string;
  public mobileNo: string;
  public address1: string;
  public address2: string;
  public gstType: string;
  public gstNo: string;
  public discount: number;
  public rateSlab: number;
  public modeOfPayment: string;
  public creditLimit: number;
  public dueDays: number;
  public openingBal: number;
  public openingBalDate: any;
  public id: number;
}
@Component({
  selector: "app-createuser",
  templateUrl: "./createuser.component.html",
  styleUrls: ["./createuser.component.scss"],
})
export class CreateuserComponent implements OnInit {
  readonly DELIMITER = "-";
  popupModel: any;
  CustomeId: any;
  model = new User();
  gstTypeList: any;
  paymentMethodList: any;
  // submitted = false;
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _userService: UserService
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getUserById();
    }
  }

  ngOnInit(): void {
    this.getGstTpes();
    this.getPaymentModes();
  }
  goBack() {
    this._location.back();
  }
  getGstTpes() {
    this._userService.getGstTypes().subscribe((ok) => {
      console.log(ok);
      this.gstTypeList = ok;
    });
  }

  getPaymentModes() {
    this._userService.getPaymentModes().subscribe((ok) => {
      console.log(ok);
      this.paymentMethodList = ok;
    });
  }
  onSubmit(form: any) {
    console.log("clicked");
    this.model.openingBalDate = new Date(this.toModel(this.popupModel));
    console.log(this.model);
    // this.submitted = true;
    this._userService.addUser(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this._location.back();
      } else {
      }
    });
  }
  onUpdate(form: any) {
    console.log("clicked");
    this.model.openingBalDate = new Date(this.toModel(this.popupModel));
    console.log(this.model);
    // this.submitted = true;
    this._userService.updateUser(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this._location.back();
      } else {
      }
    });
  }
  getUserById() {
    const dta = {
      id: this.CustomeId,
    };
    this._userService.getUserById(dta).subscribe((ok) => {
      console.log(ok);
      this.model = ok;
    });
  }
  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10),
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date
      ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year
      : null;
  }
}
