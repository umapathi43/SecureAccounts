import { filter } from "rxjs/operators";
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
export class addItem {
  public itemName: string;
  public selectedPack: any;
  public qytPerPack: any;
  public selectedManf: any;
  public selectedGrp: any;
  public selectedStrtype: any;
  public selectedSch: any;
  public selectedComp: any;
  public selectedHSN: any;
  public minDis: any;
  public maxDis: any;
  public minQty: any;
  public maxQty: any;
  public rateA: any;
  public rateB: any;
  public rateC: any;
  public rateD: any;
  public selectedDisc: any;
  public selectedGST: any;
}
@Component({
  selector: "app-additem",
  templateUrl: "./additem.component.html",
  styleUrls: ["./additem.component.scss"],
})
export class AdditemComponent implements OnInit {
  model = new addItem();
  popupModel: Date;
  CustomeId: any;
  packList: any;
  selectedPack: any;
  selectedManf: any;
  selectedGST: any;
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
  qytPerPack: any;
  addMFG: boolean;
  groupFlag: boolean;
  stroeFlag: boolean;
  schedulFlag: boolean;
  compFlag: boolean;
  hsnFlag: boolean;
  discountFlag: boolean;
  packageFlag: boolean;
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
      this.grpList = ok;
      if (this.groupName) {
        this.model.selectedGrp = this.grpList.find(
          (x) => x.groupName === this.groupName
        ).id;
        document.getElementById("frmcard").click();
      }
    });
  }

  AddGrp() {
    if (this.groupFlag) {
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
  }

  OnGrpChange(event) {
    this.groupName = event.term;
    if (event.items.length == 0) {
      this.groupFlag = true;
    } else {
      this.groupFlag = false;
    }
  }

  getStoreTypes() {
    this._strService.getStoreTypes().subscribe((ok) => {
      console.log("store types >>", ok);
      this.strTypeList = ok;
      if (this.storeTypeName) {
        this.model.selectedStrtype = this.strTypeList.find(
          (x) => x.storeTypeName === this.storeTypeName
        ).id;
        document.getElementById("frmcard").click();
      }
    });
  }

  AddStrType() {
    if (this.stroeFlag) {
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
  }

  OnStrTypeChange(event) {
    console.log(event);
    this.storeTypeName = event.term;
    this.stroeFlag = event.items.length == 0 ? true : false;
  }
  goBack() {
    this._location.back();
  }
  AddPack() {
    if (this.packageFlag) {
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
  }

  AddDiscountSlab() {
    if (this.discountFlag) {
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
  }

  Addhsn() {
    if (this.hsnFlag) {
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
  }

  AddManf() {
    if (this.addMFG) {
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
  }

  AddSch() {
    if (this.schedulFlag) {
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
  }

  AddComp() {
    if (this.compFlag) {
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
  }

  OnPackChange(event) {
    console.log(event);
    this.packName = event.term;
    this.packageFlag = event.items.length == 0 ? true : false;
  }

  OnDiscChange(event) {
    console.log(event);
    this.discountSlabName = event.term;
    this.discountFlag = event.items.length == 0 ? true : false;
  }

  OnHsnChange(event) {
    console.log(event);
    this.hsnName = event.term;
    this.hsnFlag = event.items.length == 0 ? true : false;
  }

  OnManfChange(event) {
    console.log(event);
    this.manufacturerName = event.term;
    if (event.items.length == 0) {
      this.addMFG = true;
    } else {
      this.addMFG = false;
    }
  }

  OnSchChange(event) {
    console.log(event);
    this.schedulerName = event.term;
    this.schedulFlag = event.items.length == 0 ? true : false;
  }

  OnCmpChange(event) {
    console.log(event);
    this.cName = event.term;
    this.compFlag = event.items.length == 0 ? true : false;
  }

  getPackings() {
    console.log(this.packName);
    this._packService.getPacks().subscribe((ok) => {
      console.log(ok);
      this.packList = ok;
      if (this.packName) {
        this.model.selectedPack = this.packList.find(
          (x) => x.packName === this.packName
        ).id;
        console.log(this.selectedPack);
        this.qtyChange(this.model.selectedPack);
        document.getElementById("frmcard").click();
      }
    });
  }
  getManufacture() {
    this._manfService.getManufactures().subscribe((ok) => {
      this.manfList = ok;
      if (this.manufacturerName) {
        this.model.selectedManf = this.manfList.find(
          (x) => x.manufacturerName === this.manufacturerName
        ).id;
        document.getElementById("frmcard").click();
      }
    });
  }

  getSchedules() {
    this._scheduleService.getSchedulers().subscribe((ok) => {
      console.log(ok);
      this.schList = ok;
      if (this.schedulerName) {
        this.model.selectedSch = this.schList.find(
          (x) => x.schedulerName === this.schedulerName
        ).id;
        document.getElementById("frmcard").click();
      }
    });
  }

  getComposition() {
    this._compositionService.getCompositions().subscribe((ok) => {
      this.compList = ok;
      if (this.cName) {
        this.model.selectedComp = this.compList.find(
          (x) => x.cName === this.cName
        ).id;
        document.getElementById("frmcard").click();
      }
    });
  }

  getDiscountSlabs() {
    this._discountService.getDisconts().subscribe((ok) => {
      this.discountList = ok;
      if (this.discountSlabName) {
        this.model.selectedDisc = this.discountList.find(
          (x) => x.discountSlabName === this.discountSlabName
        ).id;
      }
      document.getElementById("frmcard").click();
    });
  }

  getHsns() {
    this._hsnService.getHSNs().subscribe((ok) => {
      this.hsnList = ok;
      if (this.hsnName) {
        this.model.selectedHSN = this.hsnList.find(
          (x) => x.hsnName === this.hsnName
        ).id;
      }
      document.getElementById("frmcard").click();
    });
  }
  qtyChange(action) {
    if (action) {
      this.packList.filter((t) => {
        if (t.id == action) {
          this.model.qytPerPack = t.qty;
        }
      });
    }
  }
}
