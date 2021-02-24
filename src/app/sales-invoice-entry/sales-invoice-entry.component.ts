import { PurchaseEntryService } from "./../services/purchase-entry.service";
import { AddsupplierComponent } from "./../supplier/addsupplier/addsupplier.component";
import { ItemService } from "./../services/item.service";
import { UserService } from "app/services/user.service";
import { SupplierService } from "./../services/supplier.service";
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
  NgbDatepickerConfig,
  NgbDateStruct,
  NgbModal,
} from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";

export class Purchase {
  public mobileNo: string;
  public custmorAddress: string;
  public custmorName: string;
  public doctor: string;
  public doctorAddress: string;
  public billDate: string;
  public discount: number;
  public discountAmount: number;
  public RemainderDays: string;
  public RemainderDate: Date;
  public homeDelivery: string;
  public tax: string;
  public sellNo: string;
  public sellMargin: string;
  public radeemEntry: string;
  public pointsAvriable: string;
  public poinmodepaymenttsRed: string;
  public modepayment: string;
}
export class AmountDetails {
  public invoiceDate: string;
  public entrydate: string;
  public discount: string;
  public dueday: string;
  public srtMargin: string;
  public duedate: string;
  public netAmount: string;
  public grossAmounts: number;
  public discAmount: number;
  public noItems: number;
  public gstamount: number;
  public roundAmount: number;
  public roundOffAmt: string;
  public otherExpenses: string;
  public expenses: string;
}

@Component({
  selector: "app-sales-invoice-entry",
  templateUrl: "./sales-invoice-entry.component.html",
  styleUrls: [
    "./sales-invoice-entry.component.scss",
    "../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesInvoiceEntryComponent implements OnInit {
  public templateConf: ITemplateConfig = this.setConfigValue();
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
  remainderDta: boolean = false;
  remainderNum: boolean;
  minDate: any;
  constructor(
    private configu: NgbDatepickerConfig,
    private spinner: NgxSpinnerService,
    private _supplierService: SupplierService,
    private _userService: UserService,
    private calendar: NgbCalendar,
    public itenService: ItemService,
    private modalService: NgbModal,
    private el: ElementRef,
    private _purchaseService: PurchaseEntryService,
    private renderer: Renderer2,
    private toastr: ToastrService
  ) {
    const current = new Date();
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate(),
    };
    this.config = this.templateConf;
    this.isOpen = !this.config.layout.customizer.hidden;

    if (this.config.layout.sidebar.size) {
      this.size = this.config.layout.sidebar.size;
    }
  }
  @Output() directionEvent = new EventEmitter<Object>();
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("tableRowDetails") tableRowDetails: any;
  @ViewChild("customizer") customizer: ElementRef;
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
  toggleCustomizer() {
    if (this.isOpen) {
      this.renderer.removeClass(this.customizer.nativeElement, "open");
      this.isOpen = false;
    } else {
      this.renderer.addClass(this.customizer.nativeElement, "open");
      this.isOpen = true;
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
      netRate: "2",
      discount: "2",
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
      qtyStrip: "",
      mrp: "",
      discount: "",
      marginper: "",
      marginAmount: "",
      taxAmount: "",

      grossAmt: "",
      netAmt: "",
    },
  ];
  columns2 = [
    { name: "name", prop: "name" },
    { name: "batch", prop: "batch" },
    { name: "expiryDate", prop: "expiryDate" },
    { name: "Qty Strip", prop: "qtyStrip" },

    { name: "mrp", prop: "mrp" },
    { name: "discount", prop: "discount" },

    { name: "taxAmount", prop: "taxAmount" },

    { name: "grossAmt", prop: "grossAmt" },
    { name: "netAmt", prop: "netAmt" },
    { name: "marginAmount", prop: "marginAmount" },
    { name: "marginper", prop: "marginper" },
  ];
  model = new Purchase();
  invoice = new AmountDetails();
  ngOnInit(): void {
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
  }
  onSubmit(form) {
    console.log(form.value);
  }

  OnpriorityChange(event) {
    this.itemName = event.term;
  }
  remainderDate(action, data) {
    var current = {
      day: 0,
      month: 0,
      year: 0,
    };
    if (data == "num") {
      var date = new Date();
      let act = action;
      date.setDate(date.getDate() + act);
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      this.duedateCurrent = this.calendar.getToday();
      current.day = day;
      current.month = month;
      current.year = year;
      this.remainderDta = true;
      this.duedateCurrent = current;
    } else {
      this.remainderNum = true;
      var sent = new Date(this.toModel(action));
      var currt = new Date();
      var nub = Math.floor(
        (Date.UTC(sent.getFullYear(), sent.getMonth(), sent.getDate()) -
          Date.UTC(currt.getFullYear(), currt.getMonth(), currt.getDate())) /
          (1000 * 60 * 60 * 24)
      );
      this.model.RemainderDays = nub.toString();
    }
  }
  addItem() {
    this.Items.push({
      name: "",
      batch: "",
      expiryDate: "",
      qtyStrip: "",
      mrp: "",
      discount: "",
      marginper: "",
      marginAmount: "",
      taxAmount: "",

      grossAmt: "",
      netAmt: "",
    });
    this.Items = [...this.Items];
    this.itemFilter = this.Items;
  }

  removeItem(i: number) {
    this.Items.splice(i, 1);
    this.itemFilter = this.Items;
    // this.totalGross();
  }

  DisplayFileds(index) {
    this.showFields = index;
    console.log(this.showFields);
  }
  OnSupplierChange(event) {
    this.supplierName = event.term;
    this.supFlag = event.items.length == 0 ? true : false;
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
            this.invoice.srtMargin = this.invoice.srtMargin
              ? this.invoice.srtMargin
              : "0";
            e.srt =
              e.purchaseRate +
              e.purchaseRate * (e.gst / 100) +
              (e.purchaseRate +
                e.purchaseRate *
                  (e.gst / 100) *
                  (+this.invoice.srtMargin / 100));
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
    if (action.mfgDate && action.bestBefore) {
      let dat: Date;
      let arr: any;
      this.Items.forEach((e, i) => {
        if (i == ind) {
          var datt =
            e.mfgDate.year + "-" + e.mfgDate.month + "-" + e.mfgDate.day;
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
