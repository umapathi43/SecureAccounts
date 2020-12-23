import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { PackingService } from "app/services/packing.service";
import { CreatepackingComponent } from "app/packing/createpacking/createpacking.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ManufactureService } from "app/services/manufacture.service";
import { AddmanufacturerComponent } from "app/manufacturer/addmanufacturer/addmanufacturer.component";
import { SchedulerService } from "app/services/scheduler.service";
import { AddscheduleComponent } from "app/schedule/addschedule/addschedule.component";
import { CompositionService } from "app/services/composition.service";
import { AddcompositionComponent } from "app/composition/addcomposition/addcomposition.component";
@Component({
  selector: "app-additem",
  templateUrl: "./additem.component.html",
  styleUrls: ["./additem.component.scss"],
})
export class AdditemComponent implements OnInit {
  popupModel: Date;
  CustomeId: any;
  packList: any;
  selectedPack: any;
  selectedManf: any;
  manfList: any;
  schList: any;
  selectedSch: any;
  compList: any;
  selectedComp: any;
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _packService: PackingService,
    private modalService: NgbModal,
    private _manfService: ManufactureService,
    private _scheduleService: SchedulerService,
    private _compositionService: CompositionService
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
  }

  ngOnInit(): void {
    this.getPackings();
    this.getManufacture();
    this.getSchedules();
    this.getComposition();
  }
  goBack() {
    this._location.back();
  }
  AddPack() {
    const modalRef = this.modalService.open(CreatepackingComponent);
    // modalRef.componentInstance.id = task.taskId; // should be the id
    // modalRef.componentInstance.data = {
    //   title: task.taskTitle,
    //   message: task.taskMessage,
    //   type: task.status,
    // }; // should be the data

    modalRef.result
      .then((result) => {
        this.getPackings();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  AddManf() {
    const modalRef = this.modalService.open(AddmanufacturerComponent);
    // modalRef.componentInstance.id = task.taskId; // should be the id
    // modalRef.componentInstance.data = {
    //   title: task.taskTitle,
    //   message: task.taskMessage,
    //   type: task.status,
    // }; // should be the data

    modalRef.result
      .then((result) => {
        this.getPackings();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  AddSch() {
    const modalRef = this.modalService.open(AddscheduleComponent);
    // modalRef.componentInstance.id = task.taskId; // should be the id
    // modalRef.componentInstance.data = {
    //   title: task.taskTitle,
    //   message: task.taskMessage,
    //   type: task.status,
    // }; // should be the data

    modalRef.result
      .then((result) => {
        this.getPackings();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  AddComp() {
    const modalRef = this.modalService.open(AddcompositionComponent);
    // modalRef.componentInstance.id = task.taskId; // should be the id
    // modalRef.componentInstance.data = {
    //   title: task.taskTitle,
    //   message: task.taskMessage,
    //   type: task.status,
    // }; // should be the data

    modalRef.result
      .then((result) => {
        this.getPackings();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  OnPackChange() {
    console.log(this.selectedPack);
  }

  getPackings() {
    this._packService.getPacks().subscribe((ok) => {
      console.log(ok);
      this.packList = ok;
    });
  }
  getManufacture() {
    this._manfService.getManufactures().subscribe((ok) => {
      console.log(ok);
      this.manfList = ok;
    });
  }

  getSchedules() {
    this._scheduleService.getSchedulers().subscribe((ok) => {
      console.log(ok);
      this.schList = ok;
    });
  }

  getComposition() {
    this._compositionService.getCompositions().subscribe((ok) => {
      console.log(ok);
      this.compList = ok;
    });
  }
}
