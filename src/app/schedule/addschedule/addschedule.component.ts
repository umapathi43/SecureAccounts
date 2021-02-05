import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { SchedulerService } from "app/services/scheduler.service";
import { ToastrService } from "ngx-toastr";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
export class Schedule {
  public schedulerName: string;
  public waringMsg: any;
  public id: any;
  public warning: any;
}
@Component({
  selector: "app-addschedule",
  templateUrl: "./addschedule.component.html",
  styleUrls: ["./addschedule.component.scss"],
})
export class AddscheduleComponent implements OnInit {
  model = new Schedule();
  CustomeId: any;
  warningList: any;
  @Input() id: number;
  @Input() data: any;
  isModal: boolean;
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private toastr: ToastrService,
    private _scheduleService: SchedulerService,
    public activeModal: NgbActiveModal
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getSchedulesById();
    }
  }

  ngOnInit(): void {
    this.getWarningDetails();
    if (this.id == 0) {
      this.isModal = true;
      console.log(this.data);
      this.model.schedulerName = this.data.schedulerName;
    }
  }
  goBack() {
    if (this.isModal) {
      this.activeModal.close(this.model.schedulerName);
    } else {
      this._location.back();
    }
  }

  getWarningDetails() {
    this._scheduleService.getWarnings().subscribe((ok) => {
      this.warningList = ok;
    });
  }
  onSubmit(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._scheduleService.addScheduler(this.model).subscribe(
      (ok) => {
        console.log(ok);
        if (ok == "OK") {
          this.toastr.success("Success", "Schedule Added");
          if (this.isModal) {
            this.activeModal.close(this.model.schedulerName);
          } else {
            this._location.back();
          }
        } else {
          this.toastr.error("Failed", "Failed to update Schedule");
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
    this._scheduleService.updateScheduler(this.model).subscribe(
      (ok) => {
        console.log(ok);
        if (ok == "OK") {
          this.toastr.success("Success", "Schedule Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Schedule");
        }
      },
      (err) => {
        console.log(err);
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  getSchedulesById() {
    const dta = {
      id: this.CustomeId,
    };
    this._scheduleService.getSchedulerById(dta).subscribe((ok) => {
      console.log(ok);
      this.model = ok;
      document.getElementById("frmcard").click();
    });
  }
}
