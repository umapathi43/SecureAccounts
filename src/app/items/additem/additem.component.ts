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
import { DiscountslabService } from "app/services/discountslab.service";
import { AdddiscountslabComponent } from "app/discountslab/adddiscountslab/adddiscountslab.component";
import { HsnandsacService } from "app/services/hsnandsac.service";
import { AddhsnsacComponent } from "app/hsnsac/addhsnsac/addhsnsac.component";
import { UserService } from "app/services/user.service";
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
  selectedDisc: any;
  packName: any;
  discountList: any;
  discountSlabName: any;
  hsnList: any;
  selectedHSN: any;
  hsnName: any;
  gstTypeList: any;
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _packService: PackingService,
    private modalService: NgbModal,
    private _manfService: ManufactureService,
    private _scheduleService: SchedulerService,
    private _compositionService: CompositionService,
    private _discountService: DiscountslabService,
    private _hsnService: HsnandsacService,
    private _userService: UserService
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
  }

  ngOnInit(): void {
    this.getPackings();
    this.getManufacture();
    this.getSchedules();
    this.getComposition();
    this.getDiscountSlabs();
    this.getHsns();
    this.getGstTpes();
  }

  getGstTpes() {
    this._userService.getGstTypes().subscribe((ok) => {
      console.log("GST TYPES >>", ok);
      this.gstTypeList = ok;
    });
  }
  goBack() {
    this._location.back();
  }
  AddPack() {
    const modalRef = this.modalService.open(CreatepackingComponent);
    modalRef.componentInstance.id = 0; // should be the id
    modalRef.componentInstance.data = { packName: this.packName }; // should be the data
    modalRef.result
      .then((result) => {
        console.log(result);
        this.getPackings();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  AddDiscountSlab() {
    const modalRef = this.modalService.open(AdddiscountslabComponent);
    modalRef.componentInstance.id = 0; // should be the id
    modalRef.componentInstance.data = {
      discountSlabName: this.discountSlabName,
    }; // should be the data
    modalRef.result
      .then((result) => {
        console.log(result);
        this.getDiscountSlabs();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  Addhsn() {
    const modalRef = this.modalService.open(AddhsnsacComponent);
    modalRef.componentInstance.id = 0; // should be the id
    modalRef.componentInstance.data = {
      hsnName: this.hsnName,
    }; // should be the data
    modalRef.result
      .then((result) => {
        console.log(result);
        this.getHsns();
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
        this.packName = result;
        this.getPackings();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  OnPackChange(event) {
    console.log(event);
    this.packName = event.term;
  }

  OnDiscChange(event) {
    console.log(event);
    this.discountSlabName = event.term;
  }

  OnHsnChange(event) {
    console.log(event);
    this.hsnName = event.term;
  }

  getPackings() {
    console.log(this.packName);
    this._packService.getPacks().subscribe((ok) => {
      console.log(ok);
      this.packList = ok;
      if (this.packName) {
        this.selectedPack = this.packList.find(
          (x) => x.packName === this.packName
        ).id;
        console.log(this.selectedPack);
      }
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

  getDiscountSlabs() {
    this._discountService.getDisconts().subscribe((ok) => {
      console.log(ok);
      this.discountList = ok;
      if (this.discountSlabName) {
        this.selectedDisc = this.discountList.find(
          (x) => x.discountSlabName === this.discountSlabName
        ).id;
        console.log(this.selectedDisc);
      }
    });
  }

  getHsns() {
    this._hsnService.getHSNs().subscribe((ok) => {
      console.log(ok);
      this.hsnList = ok;
      if (this.hsnName) {
        this.selectedHSN = this.hsnList.find(
          (x) => x.hsnName === this.hsnName
        ).id;
        console.log(this.selectedHSN);
      }
    });
  }
}
