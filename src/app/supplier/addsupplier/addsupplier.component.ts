import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "app/services/user.service";
import { SupplierService } from "app/services/supplier.service";
import { ToastrService } from 'ngx-toastr';
export class Supplier {
  public supplierName: string;
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
  selector: "app-addsupplier",
  templateUrl: "./addsupplier.component.html",
  styleUrls: ["./addsupplier.component.scss"],
})
export class AddsupplierComponent implements OnInit {
  readonly DELIMITER = "-";
  popupModel: any;
  CustomeId: any;
  model = new Supplier();
  gstTypeList: any;
  paymentMethodList: any;
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _userService: UserService,
    private _supplierService: SupplierService,
    private toastr: ToastrService
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getSupplierById();
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
    this._supplierService.addSupplier(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Supplier Updated");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to update Supplier");
      }
    });
  }
  onUpdate(form: any) {
    console.log("clicked");
    this.model.openingBalDate = new Date(this.toModel(this.popupModel));
    console.log(this.model);
    // this.submitted = true;
    this._supplierService.updateSupplier(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Supplier Updated");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to update Supplier");
      }
    });
  }
  getSupplierById() {
    const dta = {
      id: this.CustomeId,
    };
    this._supplierService.getSupplierById(dta).subscribe((ok) => {
      console.log(ok);
      this.model = ok;
      this.popupModel = this.fromModel(this.model.openingBalDate);
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
