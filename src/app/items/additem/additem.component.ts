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
import { GroupService } from "app/services/group.service";
import { AddgroupComponent } from "app/group/addgroup/addgroup.component";
import { AddstoretypeComponent } from "app/storetype/addstoretype/addstoretype.component";
import { StoretypeService } from "app/services/storetype.service";
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
  manufacturerName: any;
  selectedGrp: any;
  grpList: any;
  groupName: any;
  storeTypeName: any;
  strTypeList: any;
  selectedStrtype: any;
  schedulerName: any;
  cName: any;
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
    private _userService: UserService,
    private _grpService: GroupService,
    private _strService: StoretypeService
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
    this.getGroups();
    this.getStoreTypes();
  }

  getGstTpes() {
    this._userService.getGstTypes().subscribe((ok) => {
      console.log("GST TYPES >>", ok);
      this.gstTypeList = ok;
    });
  }

  getGroups() {
    this._grpService.getGroups().subscribe((ok) => {
      console.log("GroupList >>", ok);
      this.grpList = ok;
      if (this.packName) {
        this.selectedGrp = this.grpList.find(
          (x) => x.groupName === this.groupName
        ).id;
        document.getElementById("frmcard").click();
        console.log(this.selectedPack);
      }
    });
  }

  AddGrp() {
    const modalRef = this.modalService.open(AddgroupComponent);
    modalRef.componentInstance.id = 0; // should be the id
    modalRef.componentInstance.data = { groupName: this.groupName }; // should be the data
    modalRef.result
      .then((result) => {
        console.log(result);
        this.getGroups();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  OnGrpChange(event) {
    console.log(event);
    this.groupName = event.term;
  }

  getStoreTypes() {
    this._strService.getStoreTypes().subscribe((ok) => {
      console.log("store types >>", ok);
      this.strTypeList = ok;
      if (this.storeTypeName) {
        this.selectedStrtype = this.strTypeList.find(
          (x) => x.storeTypeName === this.storeTypeName
        ).id;
        document.getElementById("frmcard").click();
        console.log(this.selectedStrtype);
      }
    });
  }

  AddStrType() {
    const modalRef = this.modalService.open(AddstoretypeComponent);
    modalRef.componentInstance.id = 0; // should be the id
    modalRef.componentInstance.data = { storeTypeName: this.storeTypeName }; // should be the data
    modalRef.result
      .then((result) => {
        console.log(result);
        this.getStoreTypes();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  OnStrTypeChange(event) {
    console.log(event);
    this.storeTypeName = event.term;
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
    modalRef.componentInstance.id = 0; // should be the id
    modalRef.componentInstance.data = {
      manufacturerName: this.manufacturerName,
    }; // should be the data
    modalRef.result
      .then((result) => {
        console.log(result);
        this.getManufacture();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  AddSch() {
    const modalRef = this.modalService.open(AddscheduleComponent);
    modalRef.componentInstance.id = 0; // should be the id
    modalRef.componentInstance.data = {
      schedulerName: this.schedulerName,
    };

    modalRef.result
      .then((result) => {
        this.getSchedules();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  AddComp() {
    const modalRef = this.modalService.open(AddcompositionComponent);
    modalRef.componentInstance.id = 0; // should be the id
    modalRef.componentInstance.data = {
      cName: this.cName,
    };

    modalRef.result
      .then((result) => {
        this.cName = result;
        this.getComposition();
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

  OnManfChange(event) {
    console.log(event);
    this.manufacturerName = event.term;
  }

  OnSchChange(event) {
    console.log(event);
    this.schedulerName = event.term;
  }

  OnCmpChange(event) {
    console.log(event);
    this.cName = event.term;
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
      if (this.manufacturerName) {
        this.selectedManf = this.manfList.find(
          (x) => x.manufacturerName === this.manufacturerName
        ).id;
        document.getElementById("frmcard").click();
        console.log(this.selectedManf);
      }
    });
  }

  getSchedules() {
    this._scheduleService.getSchedulers().subscribe((ok) => {
      console.log(ok);
      this.schList = ok;
      if (this.schedulerName) {
        this.selectedSch = this.schList.find(
          (x) => x.schedulerName === this.schedulerName
        ).id;
        document.getElementById("frmcard").click();
        console.log(this.selectedSch);
      }
    });
  }

  getComposition() {
    this._compositionService.getCompositions().subscribe((ok) => {
      console.log(ok);
      this.compList = ok;
      if (this.cName) {
        this.selectedComp = this.compList.find(
          (x) => x.cName === this.cName
        ).id;
        document.getElementById("frmcard").click();
        console.log(this.selectedSch);
      }
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
