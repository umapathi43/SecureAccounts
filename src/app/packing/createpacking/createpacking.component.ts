import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { PackingService } from "app/services/packing.service";
import { ToastrService } from "ngx-toastr";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
export class Packing {
  public id: any;
  public packName: any;
  public qty: any;
}

@Component({
  selector: "app-createpacking",
  templateUrl: "./createpacking.component.html",
  styleUrls: ["./createpacking.component.scss"],
})
export class CreatepackingComponent implements OnInit {
  CustomeId: any;
  model = new Packing();
  @Input() id: number;
  @Input() data: any;
  isModal: boolean;
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _packService: PackingService,
    private toastr: ToastrService,
    public activeModal: NgbActiveModal
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getPackById();
    }
  }

  ngOnInit(): void {
    if (this.id == 0) {
      this.isModal = true;
      console.log(this.data);
      this.model.packName = this.data.packName;
    }
  }
  goBack() {
    if (this.isModal) {
      this.activeModal.close(this.model.packName);
    } else {
      this._location.back();
    }
  }

  onSubmit(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._packService.addPack(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Pack Added");
        if (this.isModal) {
          this.activeModal.close(this.model.packName);
        } else {
          this._location.back();
        }
      } else {
        this.toastr.error("Failed", "Failed to update Pack");
      }
    },(err) => {
      console.log(err);
      this.toastr.error("Failed", err.error.message);
    });
  }

  onUpdate(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._packService.updatePack(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Pack Updated");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to update Pack");
      }
    },(err) => {
      console.log(err);
      this.toastr.error("Failed", err.error.message);
    });
  }
  getPackById() {
    const dta = {
      id: this.CustomeId,
    };
    this._packService.getPackById(dta).subscribe((ok) => {
      console.log(ok);
      this.model = ok;
      document.getElementById("frmcard").click();
    });
  }
}
