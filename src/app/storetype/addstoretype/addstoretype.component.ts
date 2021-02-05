import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { StoretypeService } from "app/services/storetype.service";
import { ToastrService } from "ngx-toastr";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
export class storeType {
  public storeTypeName: string;
  public id: number;
}
@Component({
  selector: "app-addstoretype",
  templateUrl: "./addstoretype.component.html",
  styleUrls: ["./addstoretype.component.scss"],
})
export class AddstoretypeComponent implements OnInit {
  CustomeId: any;
  model = new storeType();
  @Input() id: number;
  @Input() data: any;
  isModal: boolean;
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _storeService: StoretypeService,
    private toastr: ToastrService,
    public activeModal: NgbActiveModal
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getStoreTypeById();
    }
  }

  ngOnInit(): void {
    if (this.id == 0) {
      this.isModal = true;
      console.log(this.data);
      this.model.storeTypeName = this.data.storeTypeName;
    }
  }
  goBack() {
    if (this.isModal) {
      this.activeModal.close(this.model.storeTypeName);
    } else {
      this._location.back();
    }
  }
  onSubmit(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._storeService.addStoreType(this.model).subscribe(
      (ok) => {
        console.log(ok);
        if (ok == "OK") {
          this.toastr.success("Success", "Storetype Added");
          if (this.isModal) {
            this.activeModal.close(this.model.storeTypeName);
          } else {
            this._location.back();
          }
        } else {
          this.toastr.error("Failed", "Failed to update Storetype");
        }
      },
      (err) => {
        console.log(err);
        this.toastr.error("Failed", err.error.message);
      }
    );
  }

  onUpdate(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._storeService.updateStoreType(this.model).subscribe(
      (ok) => {
        console.log(ok);
        if (ok == "OK") {
          this.toastr.success("Success", "Storetype Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Storetype");
        }
      },
      (err) => {
        console.log(err);
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  getStoreTypeById() {
    const dta = {
      id: this.CustomeId,
    };
    this._storeService.getStoreTypeById(dta).subscribe((ok) => {
      console.log(ok);
      this.model = ok;
      document.getElementById("frmcard").click();
    });
  }
}
