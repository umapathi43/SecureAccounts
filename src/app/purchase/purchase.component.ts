import { ItemService } from "./../services/item.service";
import { UserService } from "app/services/user.service";
import { SupplierService } from "./../services/supplier.service";
import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { NgxSpinnerService } from "ngx-spinner";
import { NgbCalendar, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

export class Purchase {
  public sname: string;
  public saddress: string;
  public GSTNo: string;
  public MobileNo: string;
}
export class AmountDetails {
  public invoiceDate: string;
  public entrydate: string;
  public discount: string;
  public dueday: string;
  public srtMargin: string;
  public duedate: string;
  public invoiceNo: string;
  public grossAmounts: string;
  public discAmount: string;
  public noItems: string;
  public gstamount: string;
  public roundAmount: string;
  public footerDate: string;
}

@Component({
  selector: "app-purchase",
  templateUrl: "./purchase.component.html",
  styleUrls: [
    "./purchase.component.scss",
    "../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class PurchaseComponent implements OnInit {
  duedateCurrent: NgbDateStruct;
  showFields: any;
  duedateInvoice: any;
  inVoiceDate: any;
  footerdate: any;
  entrydateInvoice: any;
  readonly DELIMITER = "-";
  supplierdata: any;
  supplierName: any;
  gstTypeList: any;
  itemArray: any;
  maxdate: { year: number; month: number; day: number };
  mfgDate: boolean;
  beforeDetails: any[];
  constructor(
    private spinner: NgxSpinnerService,
    private _supplierService: SupplierService,
    private _userService: UserService,
    private calendar: NgbCalendar,
    public itenService: ItemService
  ) {}
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("tableRowDetails") tableRowDetails: any;
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
      maxdate: "",
      srt: "",
      grossAmt: "",
      netAmt: "",
      mfgdateFlag: "",
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
  invoice = new AmountDetails();
  ngOnInit(): void {
    this.getSuppliers();
    this.getGstTpes();
    this.getItemDetails();
    this.getBestBeforeDetails();
  }
  onSubmit(form) {
    console.log(form.value);
  }
  getSuppliers() {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    this._supplierService.getSuppliers().subscribe((ok) => {
      console.log(ok);
      this.supplierdata = ok;
      this.spinner.hide();
    });
  }
  addItem() {
    this.Items.push({
      name: "",
      batch: "",
      expiryDate: "",
      mfgDate: "",
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
      maxdate: "",
      srt: "",
      grossAmt: "",
      netAmt: "",
      mfgdateFlag: "",
    });
    this.Items = [...this.Items];
  }

  removeItem(i: number) {
    this.Items.splice(i, 1);
  }

  DisplayFileds(index) {
    this.showFields = index;
    console.log(this.showFields);
  }
  OnSupplierChange(event) {
    this.supplierName = event.term;
    // this.schedulFlag = event.items.length == 0 ? true : false;
  }
  supplierAddress(action) {
    if (action) {
      this.supplierdata.forEach((e) => {
        if (e.id == action) {
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
      ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year
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
  discountAmountChange(action, ind) {
    if (action) {
      if (action.qty && action.purchaseRate && action.discount) {
        this.Items.forEach((e, i) => {
          if (i == ind) {
            e.discAmount = (e.qty * e.purchaseRate * e.discount) / 100;
          }
        });
      }
    }
  }
  taxAmount(action, ind) {
    if (action) {
      if (
        action.qty &&
        action.purchaseRate &&
        action.discAmount &&
        action.gst
      ) {
        this.Items.forEach((e, i) => {
          if (i == ind) {
            e.taxAmount = (e.qty * e.purchaseRate - e.discAmount) * e.gst;
          }
        });
      }
    }
  }
  srtAmount(action, ind) {
    if (action) {
      if (action.purchaseRate && this.invoice.srtMargin) {
        this.Items.forEach((e, i) => {
          if (i == ind) {
            e.srt = e.purchaseRate + +this.invoice.srtMargin / 100;
          }
        });
      }
    }
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
  netAmount(action, ind) {
    if (action) {
      if (
        action.discAmount &&
        action.schdiscAmount &&
        action.grossAmt &&
        action.taxAmount
      ) {
        this.Items.forEach((e, i) => {
          if (i == ind) {
            e.netAmt =
              e.grossAmt - e.discAmount - e.schdiscAmount + e.taxAmount;
          }
        });
      }
    }
  }
}
