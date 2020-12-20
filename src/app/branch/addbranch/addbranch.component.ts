import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { BranchService } from "app/services/branch.service";
import { ToastrService } from "ngx-toastr";
export class Branch {
  public branchName: string;
  public addreess: any;
  public id: number;
  public contact_name: string;
  public mobileNo: any;
  public location: number;
}
@Component({
  selector: "app-addbranch",
  templateUrl: "./addbranch.component.html",
  styleUrls: ["./addbranch.component.scss"],
})
export class AddbranchComponent implements OnInit {
  CustomeId: any;
  model = new Branch();
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _branchService: BranchService,
    private toastr: ToastrService
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getBranchById();
    }
  }

  ngOnInit(): void {}
  goBack() {
    this._location.back();
  }
  onSubmit(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._branchService.addBranch(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Branch Added");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to add Branch");
      }
    });
  }
  onUpdate(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._branchService.updateBranch(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Branch Updated");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to update Branch");
      }
    });
  }
  getBranchById() {
    const dta = {
      id: this.CustomeId,
    };
    this._branchService.getBranchById(dta).subscribe((ok) => {
      console.log(ok);
      this.model = ok;
      document.getElementById("frmcard").click();
    });
  }
}
