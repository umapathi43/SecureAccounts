import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ToastrService } from "ngx-toastr";
import { GroupService } from "app/services/group.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

export class Group {
  public groupName: any;
  public id: any;
}

@Component({
  selector: "app-addgroup",
  templateUrl: "./addgroup.component.html",
  styleUrls: ["./addgroup.component.scss"],
  // providers: [NgbActiveModal],
})
export class AddgroupComponent implements OnInit {
  CustomeId: any;
  model = new Group();
  @Input() id: number;
  @Input() data: any;
  isModal: boolean;
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private toastr: ToastrService,
    private _grpService: GroupService,
    public activeModal: NgbActiveModal
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getGroupById();
    }
  }

  ngOnInit(): void {
    if (this.id == 0) {
      this.isModal = true;
      console.log(this.data);
      this.model.groupName = this.data.groupName;
    }
  }
  goBack() {
    if (this.isModal) {
      this.activeModal.close(this.model.groupName);
    } else {
      this._location.back();
    }
  }

  onSubmit(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._grpService.addGroup(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Group Added");
        if (this.isModal) {
          this.activeModal.close(this.model.groupName);
        } else {
          this._location.back();
        }
      } else {
        this.toastr.error("Failed", "Failed to add Group");
      }
    });
  }
  onUpdate(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._grpService.updateGroup(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Group Updated");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to update Group");
      }
    });
  }
  getGroupById() {
    const dta = {
      id: this.CustomeId,
    };
    this._grpService.getGroupById(dta).subscribe((ok) => {
      console.log(ok);
      this.model = ok;
      document.getElementById("cardfrom").click();
    });
  }
}
