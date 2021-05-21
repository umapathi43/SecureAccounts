import { PurchaseEntryService } from "./../services/entryServices/purchase-entry.service";
import { AddsupplierComponent } from "./../supplier/addsupplier/addsupplier.component";
import { ItemService } from "./../services/item.service";
import { UserService } from "app/services/user.service";
import { SupplierService } from "./../services/supplier.service";
import * as XLSX from "xlsx";
import { Subject } from "rxjs/Subject";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { NgxSpinnerService } from "ngx-spinner";
import {
  NgbCalendar,
  NgbDateStruct,
  NgbModal,
} from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { PurchaseEntryInvoiceComponent } from "app/invoicePrint/purchase-entry-invoice/purchase-entry-invoice.component";

export class Purchase {
  public sname: string;
  public saddress: string;
  public GSTNo: string;
  public MobileNo: number;
  public entrydate: string;
  public discount: number;
  public dueday: string;
  public srtMargin: number;
  public duedate: string;
  public invoiceNo: string;
  public grossAmounts: number;
  public discAmount: number;
  public noItems: number;
  public gstamount: number;
  public roundAmount: number;
  public footerDate: string;
  public disPercentage: number;
  public otherExp: number;
  public netAmount: number;
  public Amount: number;
}

@Component({
  selector: "app-purchase",
  templateUrl: "./purchase.component.html",
  styleUrls: [
    "./purchase.component.scss",
    "../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchaseComponent implements OnInit {
  public templateConf: ITemplateConfig = this.setConfigValue();
  duedateCurrent: NgbDateStruct;
  showFields: any;
  duedateInvoice: NgbDateStruct;
  inVoiceDate: NgbDateStruct;
  footerdate: any;
  entrydateInvoice: NgbDateStruct;
  readonly DELIMITER = "-";
  supplierdata: any;
  supplierName: any;
  gstTypeList: any;
  itemArray: any;
  maxdate: { year: number; month: number; day: number };
  // mfgDatePicker: NgbDateStruct;
  beforeDetails: any[];
  supFlag: boolean;
  supplierNameId: any;
  itemFilter: any[];
  isBgImageDisplay: boolean = true;
  isOpen = true;
  public config: any = {};
  size: any;
  itemSelect: any[];
  itemName: any;
  itemNameSelect: any = "Net Amount";
  itemNameSelect1: any;
  popUpselect: boolean = false;
  isNavbarSeachTextEmpty: boolean;
  CustomeId: any;
  updatedRes: any;
  arrayList: any = [];
  constructor(
    private _location: Location,
    private spinner: NgxSpinnerService,
    private _supplierService: SupplierService,
    private _userService: UserService,
    private calendar: NgbCalendar,
    public itenService: ItemService,
    private modalService: NgbModal,
    private el: ElementRef,
    private _purchaseService: PurchaseEntryService,
    private renderer: Renderer2,
    private toastr: ToastrService,
    private actRoute: ActivatedRoute
  ) {
    this.config = this.templateConf;
    this.isOpen = !this.config.layout.customizer.hidden;
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getPurchaseId();
    }

    if (this.config.layout.sidebar.size) {
      this.size = this.config.layout.sidebar.size;
    }
  }
  @Output() directionEvent = new EventEmitter<Object>();
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("tableRowDetails") tableRowDetails: any;
  @ViewChild("customizer") customizer: ElementRef;
  keys: string[];
  dataSheet = new Subject();
  @ViewChild("inputFile") inputFile: ElementRef;
  isExcelFile: boolean;
  setConfigValue() {
    return (this.templateConf = {
      layout: {
        variant: "Light",
        menuPosition: "Side",
        customizer: {
          hidden: true,
        },
        navbar: {
          type: "Static",
        },
        sidebar: {
          collapsed: false,
          size: "sidebar-md",
          backgroundColor: "man-of-steel",
          backgroundImage: true,
          backgroundImageURL: "assets/img/sidebar-bg/01.jpg",
        },
      },
    });
  }
  toggleCustomizer(action?) {
    if (this.isOpen) {
      this.renderer.removeClass(this.customizer.nativeElement, "open");
      this.isOpen = false;
    } else {
      if (!action) {
        this.renderer.addClass(this.customizer.nativeElement, "open");
        this.isOpen = true;
      }
    }
  }

  closeCustomizer() {
    this.renderer.removeClass(this.customizer.nativeElement, "open");
    this.isOpen = this.popUpselect = false;
  }
  // row data
  rows: any[] = [
    {
      itemName: "dean3004",
      qty: "2",
      schemeQty: "2",
      purchaseRate: "2",
      discount: "2",
      billDate: "2020-12-12",
      supplierName: "dean3004",
    },
  ];
  ColumnMode = ColumnMode;
  //limitRef = 10;
  exportColumns: any;

  /**
   * rowDetailsToggleExpand
   *
   * @param row
   */
  rowDetailsToggleExpand(row) {
    this.tableRowDetails.rowDetail.toggleExpandRow(row);
  }
  // column header
  columns = [
    { name: "itemName", prop: "itemName" },
    { name: "qty", prop: "qty" },
    { name: "schemeQty", prop: "schemeQty" },
    { name: "purchaseRate", prop: "purchaseRate" },
    { name: "discount", prop: "discount" },
    { name: "billDate", prop: "billDate" },
    { name: "supplierName", prop: "supplierName" },
  ];

  public Items: any[] = [
    {
      name: "",
      batch: "",
      expiryDate: "",
      mfgDate: "",
      mfgDatePicker: "",
      bestBefore: "",
      qty: "",
      freeQty: "",
      mrp: "",
      purchaseRate: "",
      discount: "",
      discAmount: "",
      schdiscAmount: "",
      gst: "",
      taxAmount: "",
      qpk: "",
      maxdate: 0,
      srt: "",
      grossAmt: "",
      netAmt: "",
      mfgdateFlag: false,
      id: 0,
    },
  ];
  columns2 = [
    { name: "name", prop: "name" },
    { name: "batch", prop: "batch" },
    { name: "expiryDate", prop: "expiryDate" },
    { name: "mfgDate", prop: "mfgDate" },
    { name: "bestBefore", prop: "bestBefore" },
    { name: "qty", prop: "qty" },
    { name: "freeQty", prop: "freeQty" },
    { name: "mrp", prop: "mrp" },
    { name: "purchaseRate", prop: "purchaseRate" },
    { name: "discount", prop: "discount" },
    { name: "discAmount", prop: "discAmount" },
    { name: "schdiscAmount", prop: "schdiscAmount" },
    { name: "gst", prop: "gst" },
    { name: "taxAmount", prop: "taxAmount" },
    { name: "qpk", prop: "qpk" },
    { name: "srt", prop: "srt" },
    { name: "grossAmt", prop: "grossAmt" },
    { name: "netAmt", prop: "netAmt" },
  ];
  model = new Purchase();
  ngOnInit(): void {
    this.getSuppliers();
    this.getGstTpes();
    this.getItemDetails();
    this.getBestBeforeDetails();
    this.getSettingsDetails();
    this.itemFilter = this.Items;
    this.itemSelect = [
      // { itemName: "Item Name", id: 1 },
      // { itemName: "Batch", id: 2 },
      // { itemName: "Expiry Date", id: 3 },
      // { itemName: "MFG Date", id: 4 },
      { itemName: "Best Before", id: 5 },
      { itemName: "Quantty", id: 6 },
      { itemName: "free Qty", id: 7 },
      { itemName: "MRP", id: 8 },
      { itemName: "Purchase Rate", id: 9 },
      { itemName: "Discount", id: 10 },
      { itemName: "Discount Amount", id: 11 },
      { itemName: "Schedule Discount Amount", id: 12 },
      { itemName: "Tax Amount", id: 13 },
      { itemName: "Quantity Per Pack", id: 14 },
      { itemName: "SRT", id: 15 },
      { itemName: "Gross Amount", id: 16 },
      { itemName: "Net Amount", id: 17 },
      { itemName: "GST", id: 18 },
    ];
    document.getElementById("ngx-datatable-filter").onclick;
  }

  getSuppliers() {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    this._supplierService.getSuppliers().subscribe((ok) => {
      console.log(ok);
      this.supplierdata = ok;
      if (this.supplierName) {
        this.model.sname = this.supplierdata.find(
          (x) => x.supplierName === this.supplierName
        ).supplierName;
        document.getElementById("frmcard").click();
        // this.supplierAddress(this.model.sname);
      }
      this.spinner.hide();
    });
  }
  OnpriorityChange(event) {
    this.itemName = event.term;
  }
  addItem(data?) {
    if (data) {
      this.Items.push(data);
      this.Items = [...this.Items];
    } else {
      this.Items.push({
        name: "",
        batch: "",
        expiryDate: "",
        mfgDate: "",
        mfgDatePicker: "",
        bestBefore: "",
        qty: "",
        freeQty: "",
        mrp: "",
        purchaseRate: "",
        discount: "",
        discAmount: "",
        schdiscAmount: "",
        gst: "",
        taxAmount: "",
        qpk: "",
        maxdate: 0,
        srt: "",
        grossAmt: "",
        netAmt: "",
        mfgdateFlag: false,
        id: 0,
      });
      this.Items = [...this.Items];
    }
    this.itemFilter = this.Items;
  }

  removeItem(i: number) {
    this.Items.splice(i, 1);
    this.itemFilter = this.Items;
    this.totalGross();
  }

  DisplayFileds(index) {
    this.showFields = index;
    console.log(this.showFields);
  }
  OnSupplierChange(event) {
    this.supplierName = event.term;
    this.supFlag = event.items.length == 0 ? true : false;
  }
  supplierAddress(action) {
    if (action) {
      this.supplierdata.forEach((e) => {
        if (e.supplierName == action) {
          this.model.saddress = e.address1 + "" + e.address2;
          this.model.MobileNo = e.mobileNo;
          this.model.GSTNo = e.gstType;
        }
      });
    }
  }
  getBestBeforeDetails() {
    this._userService.getBestBeforeDetails().subscribe((ok: any) => {
      this.beforeDetails = ok;
    });
  }
  getGstTpes() {
    this._userService.getGstTypes().subscribe((ok) => {
      console.log("GST TYPES >>", ok);
      this.gstTypeList = ok;
    });
  }
  toModel(date: NgbDateStruct | null): string | null {
    return date
      ? date.year + this.DELIMITER + date.month + this.DELIMITER + date.day
      : null;
  }
  duedateChange(action) {
    var current = {
      day: 0,
      month: 0,
      year: 0,
    };
    var date = new Date();
    let act = +action;
    date.setDate(date.getDate() + act);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    this.duedateCurrent = this.calendar.getToday();
    current.day = day;
    current.month = month;
    current.year = year;
    this.duedateInvoice = current;
  }
  getItemDetails() {
    this.itenService.getItemDetails().subscribe((ok: any) => {
      this.itemArray = ok.filter((t) => t.status == "A");
    });
  }
  mgdChange(date, ind) {
    // let arr = date.split("-");
    // var l = { year: 0, month: 0, day: 0 };
    // l.day = 1;
    // arr[0].substring(1);
    // l.month = +arr[0];
    // l.year = +arr[1];
    // this.Items.forEach((v, i) => {
    //   if (i == ind) {
    //     v.maxdate = l;
    //   }
    // });
    if (date) {
      this.Items.forEach((v, i) => {
        if (i == ind) {
          v.mfgdateFlag = true;
        }
      });
    } else {
      this.Items.forEach((v, i) => {
        if (i == ind) {
          v.mfgdateFlag = false;
        }
      });
    }
  }
  limitDecimalPlaces(e, count) {
    if (e.target.value.indexOf(".") == -1) {
      return;
    }
    if (e.target.value.length - e.target.value.indexOf(".") > count) {
      e.target.value = parseFloat(e.target.value).toFixed(count);
    }
  }
  discountAmountChange(action, ind, val) {
    if (action.purchaseRate) {
      if (action.discAmount || action.discount) {
        if (val == "amt" || val == "rate" || val == "qyt") {
          this.Items.forEach((e, i) => {
            if (i == ind) {
              e.discount = (e.discAmount * 100) / (e.qty * e.purchaseRate);
            }
          });
        } else if (val == "dis" || val == "rate" || val == "qyt") {
          this.Items.forEach((e, i) => {
            if (i == ind) {
              e.discAmount = (e.qty * e.purchaseRate * e.discount) / 100;
            }
          });
        }
      }
    }
  }
  onWrapperClick() {
    this.isNavbarSeachTextEmpty = true;
  }
  addsupplierPop(action) {
    if (!action) {
      this.closeCustomizer();
      this.popUpselect = true;
      this.toggleCustomizer(action);
      this.model.sname = this.supplierName;
    }
    // if (this.supFlag && (action == undefined || action == "")) {
    //   const modalRef = this.modalService.open(AddsupplierComponent);
    //   modalRef.componentInstance.id = 0; // should be the id
    //   modalRef.componentInstance.data = {
    //     hsnName: this.supplierName,
    //   }; // should be the data
    //   modalRef.result
    //     .then((result) => {
    //       console.log(result);
    //       this.getSuppliers();
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
  }
  taxAmount(action, ind) {
    if (action) {
      if (action.qty && action.purchaseRate) {
        this.Items.forEach((e, i) => {
          if (i == ind) {
            e.discAmount = e.discAmount ? e.discAmount : 0;
            e.taxAmount =
              (e.qty * e.purchaseRate - e.discAmount) * (e.gst / 100);
          }
        });
      }
    }
  }
  srtAmount(action, ind) {
    if (action) {
      if (action.purchaseRate) {
        this.Items.forEach((e, i) => {
          if (i == ind) {
            this.model.srtMargin = this.model.srtMargin
              ? this.model.srtMargin
              : 0;
            e.srt =
              e.purchaseRate + e.purchaseRate * (+this.model.srtMargin / 100);
            // e.srt =
            //   e.purchaseRate +
            //   e.purchaseRate * (e.gst / 100) +
            //   (e.purchaseRate +
            //     e.purchaseRate * (e.gst / 100) * (+this.model.srtMargin / 100));
          }
        });
      }
    }
  }
  srtMarginValue(action) {
    this.Items.forEach((e, i) => {
      if (e.purchaseRate) {
        e.srt =
          e.purchaseRate +
          e.purchaseRate * (e.gst / 100) +
          (e.purchaseRate + e.purchaseRate * (e.gst / 100) * (+action / 100));
      }
    });
  }
  grossAmount(action, ind) {
    if (action) {
      if (action.purchaseRate && action.qty) {
        this.Items.forEach((e, i) => {
          if (i == ind) {
            e.grossAmt = e.purchaseRate * e.qty;
          }
        });
      }
    }
  }
  netAmountChange(action, ind) {
    if (action) {
      if (action.grossAmt && action.taxAmount) {
        this.Items.forEach((e, i) => {
          if (i == ind) {
            e.discAmount = e.discAmount ? e.discAmount : 0;
            e.schdiscAmount = e.schdiscAmount ? e.schdiscAmount : 0;
            e.netAmt =
              e.grossAmt - e.discAmount - e.schdiscAmount + e.taxAmount;
          }
        });
      }
    }
  }
  mfgDateChange(action, ind) {
    if (action.mfgDatePicker && action.bestBefore) {
      let dat: Date;
      let arr: any;
      this.Items.forEach((e, i) => {
        if (i == ind) {
          var datt =
            e.mfgDatePicker.year +
            "-" +
            e.mfgDatePicker.month +
            "-" +
            e.mfgDatePicker.day;
          dat = new Date(datt);
          arr = e.bestBefore.split(" ");
          if (arr[1] == "Days") {
            dat.setDate(dat.getDate() + +arr[0]);
          } else if (arr[1] == "Months") {
            dat.setMonth(dat.getMonth() + +arr[0]);
          } else if (arr[1] == "Years") {
            dat.setFullYear(dat.getFullYear() + +arr[0]);
          }
          var moth = new String(dat.getMonth() + 1);
          if (moth.length == 1) {
            moth = "0" + moth;
          }
          var year = new String(dat.getFullYear());
          e.expiryDate = moth + "-" + year;
          // e.mfgDate.day = dat.getDate();
          // e.mfgDate.month = dat.getMonth();
          // e.mfgDate.year = dat.getFullYear();
        }
      });
    }
  }
  totalGross() {
    let gross = 0;
    let disAmount = 0;
    let gstAmt = 0;
    let netAmt = 0;
    if (this.Items.length > 0) {
      this.Items.forEach((e) => {
        e.discAmount = e.discAmount ? e.discAmount : 0;
        gross = gross + e.grossAmt;
        disAmount = disAmount + e.discAmount;
        gstAmt = gstAmt + e.taxAmount;
        netAmt = netAmt + e.netAmt;
      });
      this.model.grossAmounts = gross;
      this.model.discAmount = disAmount;
      this.model.gstamount = gstAmt;
      this.model.netAmount = netAmt;
      this.model.noItems = this.Items.length;
    }
  }
  packageChange(action, ind) {
    if (action.name) {
      this.Items.forEach((e, i) => {
        if (i == ind) {
          this.itemArray.forEach((p) => {
            if (p.id == e.name) {
              e.qpk = p.qty_per_pack;
              e.gst = p.gst;
              e["itemName"] = p.itemName;
            }
          });
        }
      });
    }
  }
  roundOffAmt() {
    this.model.otherExp = this.model.otherExp ? this.model.otherExp : 0;
    this.model.roundAmount = this.model.roundAmount
      ? this.model.roundAmount
      : 0;
    this.model.netAmount =
      +this.model.netAmount + this.model.roundAmount + this.model.otherExp;
  }
  filterUpdate(event) {
    const val = event.target.value.toLowerCase()
      ? event.target.value.toLowerCase()
      : "";

    // filter our data
    const temp = this.Items.filter((d) => {
      return d.itemName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    if (temp.length > 0 && val != "") {
      this.Items = temp;
    } else {
      this.Items = this.itemFilter;
    }
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  defaultChange(action) {
    if (action == this.itemNameSelect) {
      this.addItem();
    }
  }
  backtoNormal(event) {
    if (event) {
      this.getSuppliers();
    }
    this.closeCustomizer();
  }
  getSettingsDetails() {
    this._purchaseService.getSettingsDetails().subscribe((ok: any) => {
      this.itemNameSelect = ok[0].settingName;
      this.itemNameSelect1 = this.itemNameSelect;
    });
  }
  updatteSetting() {
    var req = {
      id: 1,
      settingName: this.itemNameSelect,
    };
    this.itemNameSelect1 = this.itemNameSelect;
    this._purchaseService.updateSettingsDetails(req).subscribe((ok: any) => {
      if (ok.toLowerCase() === "ok") {
        setTimeout(() => {
          this.itemNameSelect1 = this.itemNameSelect;
        }, 10);
        this.toastr.success("Success", "Updated");
      }
    });
  }
  onSubmit() {
    var req = this.model;
    req["purchaseDetails"] = this.Items;
    req["purchaseDetails"].forEach((e) => {
      e.mfgDate = this._purchaseService.toModel(e.mfgDatePicker);
      delete e.mfgDatePicker;
      delete e.id;
      e["invoiceNo"] = this.model.invoiceNo;
      // delete e.maxdate;
      // delete e.mfgdateFlag;
    });
    req["entrydate"] = this._purchaseService.toModel(this.entrydateInvoice);
    req["invoiceDate"] = this._purchaseService.toModel(this.inVoiceDate);
    req["duedate"] = this._purchaseService.toModel(this.duedateInvoice);
    req["footerDate"] = "2021-1-23";
    this._purchaseService.addPurchaseEntry(req).subscribe(
      (ok: any) => {
        if (ok == "OK") {
          this.toastr.success("Success", "SuccessFully Entry Created");
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
  getPurchaseId() {
    this._purchaseService.getPurchaseId(this.CustomeId).subscribe((ok: any) => {
      this.updatedRes = ok;
      this.model = this.updatedRes;
      this.Items = this.updatedRes.purchaseDetails;
      this.Items.forEach((t) => {
        if (t.name) {
          t.name = +t.name;
        }
      });
    });
  }
  onUpdate() {
    var req = this.model;
    req["purchaseDetails"] = this.Items;
    req["purchaseDetails"].forEach((e) => {
      // var dat = this.toModel(e.mfgDatePicker);
      // e.mfgDate = dat;
      e.mfgDate = this._purchaseService.toModel(e.mfgDatePicker);

      delete e.mfgDatePicker;
      e["invoiceNo"] = this.model.invoiceNo;
      // delete e.maxdate;
      // delete e.mfgdateFlag;
    });
    req["entrydate"] = this._purchaseService.toModel(this.entrydateInvoice);
    req["invoiceDate"] = this._purchaseService.toModel(this.inVoiceDate);
    req["duedate"] = this._purchaseService.toModel(this.duedateInvoice);
    req["footerDate"] = "2021-1-23";
    console.log("rerere", req);
    this._purchaseService.updatePurchaseEntry(req).subscribe(
      (ok: any) => {
        if (ok == "OK") {
          this.toastr.success("Success", "SuccessFully Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Entry");
        }
      }
      // (err) => {
      //   console.log(err);
      //   this.toastr.error("Failed", err.error.message);
      // }
    );
  }
  goBack() {
    this._location.back();
  }
  onChange(evt) {
    let obj1 = {
      name: "",
      batch: "",
      expiryDate: "",
      mfgDate: "",
      mfgDatePicker: "",
      bestBefore: "",
      qty: "",
      freeQty: "",
      mrp: "",
      purchaseRate: "",
      discount: "",
      discAmount: "",
      schdiscAmount: "",
      gst: "",
      taxAmount: "",
      qpk: "",
      maxdate: 0,
      srt: "",
      grossAmt: "",
      netAmt: "",
      mfgdateFlag: false,
      id: 0,
    };
    // this.Items = [];
    let data, header;
    const target: DataTransfer = <DataTransfer>evt.target;
    this.isExcelFile = !!target.files[0].name.match(/(.xls|.xlsx)/);
    if (target.files.length > 1) {
      this.inputFile.nativeElement.value = "";
    }
    if (this.isExcelFile) {
      this.spinner.show(undefined, {
        type: "ball-triangle-path",
        size: "medium",
      });
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        /* read workbook */
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: "binary" });

        /* grab first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        /* save data */
        data = XLSX.utils.sheet_to_json(ws);
      };

      reader.readAsBinaryString(target.files[0]);

      reader.onloadend = (e) => {
        this.spinner.hide();
        this.keys = Object.keys(data[0]);
        this.dataSheet.next(data);
        this.arrayList = data;
        if (this.arrayList.length > 0) {
          this.Items = [];
          this.arrayList.forEach((e) => {
            let keyss = Object.keys(e);
            let obj = Object.create(obj1);
            keyss.forEach((k) => {
              if (k === "Name") {
                obj.name = e[k];
              } else if (k === "Batch") {
                obj.batch = e[k].toString();
              } else if (k === "Expiry Date") {
                obj.expiryDate = e[k];
              } else if (k === "Mfg Date") {
                obj.mfgDate = e[k];
              } else if (k === "Best Before") {
                obj.bestBefore = e[k].toString();
              } else if (k === "Qty") {
                obj.qty = e[k];
              } else if (k === "Free Qty") {
                obj.freeQty = e[k];
              } else if (k === "MRP") {
                obj.mrp = e[k];
              } else if (k === "Purchase Rate") {
                obj.purchaseRate = e[k];
              } else if (k === "Disc Amount") {
                obj.discAmount = e[k];
              } else if (k === "Discount") {
                obj.discount = e[k];
              } else if (k === "Sch Disc Amount") {
                obj.schdiscAmount = e[k];
              } else if (k === "GST") {
                obj.gst = e[k];
              } else if (k === "Tax Amount") {
                obj.taxAmount = e[k];
              } else if (k === "QPK") {
                obj.qpk = e[k].toString();
              } else if (k === "SRT") {
                obj.srt = e[k].toString();
              } else if (k === "Gross Amt") {
                obj.grossAmt = e[k].toString();
              } else if (k === "Net Amt") {
                obj.netAmt = e[k].toString();
              }
            });
            this.addItem(obj);
          });
        }
        console.log(this.Items, "this.items");
      };
    } else {
      this.inputFile.nativeElement.value = "";
    }
  }
  keytab(event) {
    debugger;
    let value = event.srcElement.value; // get the sibling element
    let element = event.srcElement.nextElementSibling;
    console.log(event.srcElement.nextElementSibling, "dfghjk");
    if (event.keyCode === 13 && !value)
      // check if its null
      return;
    else {
      // element.preventDefault();
      element.focus();
    } // focus if not null
  }
  openXl(content) {
    this.modalService.open(PurchaseEntryInvoiceComponent, {
      size: "xl",
      scrollable: true,
    });
  }
}

export interface ITemplateConfig {
  layout: {
    variant: string; // options: Dark, Light & Transparent
    menuPosition: string; // options: Side, Top (Note: Use 'Side' for Vertical Menu & 'Top' for Horizontal Menu )
    customizer: {
      hidden: boolean; // options: true, false
    };
    navbar: {
      type: string; // options: Static & Fixed
    };
    sidebar: {
      //Options for Vertical Side menu
      collapsed: boolean; // options: true, false
      size: string; // Options: 'sidebar-lg', 'sidebar-md', 'sidebar-sm'
      backgroundColor: string; // Options: 'black', 'pomegranate', 'king-yna', 'ibiza-sunset', 'flickr', 'purple-bliss', 'man-of-steel', 'purple-love'

      /* If you want transparent layout add any of the following mentioned classes to backgroundColor of sidebar option :
              bg-glass-1, bg-glass-2, bg-glass-3, bg-glass-4, bg-hibiscus, bg-purple-pizzaz, bg-blue-lagoon, bg-electric-viloet, bg-protage, bg-tundora
            */
      backgroundImage: boolean; // Options: true, false | Set true to show background image
      backgroundImageURL: string;
    };
  };
}
