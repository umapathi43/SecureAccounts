import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HsnandsacService } from "app/services/hsnandsac.service";
import { Location } from "@angular/common";
import { ToastrService } from "ngx-toastr";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
export class HsnSac {
  public id: number;
  public hsnName: string;
  public descirption: string;
}
@Component({
  selector: "app-addhsnsac",
  templateUrl: "./addhsnsac.component.html",
  styleUrls: ["./addhsnsac.component.scss"],
})
export class AddhsnsacComponent implements OnInit {
  CustomeId: any;
  model = new HsnSac();
  @Input() id: number;
  @Input() data: any;
  isModal: boolean;
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private toastr: ToastrService,
    private _hsnService: HsnandsacService,
    public activeModal: NgbActiveModal
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getHSNById();
    }
  }

  ngOnInit(): void {
    if (this.id == 0) {
      this.isModal = true;
      console.log(this.data);
      this.model.hsnName = this.data.hsnName;
    }
  }
  goBack() {
    if (this.isModal) {
      this.activeModal.close(this.model.hsnName);
    } else {
      this._location.back();
    }
  }

  onSubmit(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._hsnService.addHSN(this.model).subscribe(
      (ok) => {
        console.log(ok);
        if (ok == "OK") {
          this.toastr.success("Success", "HSN Added");
          if (this.isModal) {
            this.activeModal.close(this.model.hsnName);
          } else {
            this._location.back();
          }
        } else {
          this.toastr.error("Failed", "Failed to add HSN");
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
    this._hsnService.updateHSN(this.model).subscribe(
      (ok) => {
        console.log(ok);
        if (ok == "OK") {
          this.toastr.success("Success", "HSN Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update HSN");
        }
      },
      (err) => {
        console.log(err);
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  getHSNById() {
    const dta = {
      id: this.CustomeId,
    };
    this._hsnService.getHSNById(dta).subscribe((ok) => {
      console.log(ok);
      this.model = ok;
      document.getElementById("cardfrom").click();
    });
  }
}
