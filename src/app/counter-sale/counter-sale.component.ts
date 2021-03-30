import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { PurchaseEntryService } from "app/services/entryServices/purchase-entry.service";
import { NgxSpinnerService } from "ngx-spinner";
import { Location } from "@angular/common";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
export class CounterSales {
  public entryDate: string;
  public totalItems: number;
  public totalVal: number;
  public id: any;
}

@Component({
  selector: "app-counter-sale",
  templateUrl: "./counter-sale.component.html",
  styleUrls: [
    "./counter-sale.component.scss",
    "../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CounterSaleComponent implements OnInit {
  showFields: any;
  CustomeId: any;
  readonly DELIMITER = "-";
  entryDatemodel: NgbDateStruct;
  constructor(
    private _location: Location,
    public actRoute: ActivatedRoute,
    private toastr: ToastrService,
    private _purchaseService: PurchaseEntryService,
    private spinner: NgxSpinnerService
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    if (this.CustomeId) {
      this.getCounterSalesID();
    }
  }
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
    { name: "selectAmount", prop: "selectAmount" },
    { name: "entryAmount", prop: "entryAmount" },
    { name: "discAmount", prop: "discAmount" },
    { name: "purchaseRate", prop: "purchaseRate" },
    { name: "discount", prop: "discount" },
    { name: "billDate", prop: "billDate" },
    { name: "supplierName", prop: "supplierName" },
  ];

  public Items: any[] = [
    {
      itemName: "",
      Batch: "",
      packQty: "",
      loosQty: "",
      TotalQty: "",
      Rate: "",
      Amount: "",
    },
  ];
  columns2 = [
    { name: "itemName", prop: "itemName" },
    { name: "Batch", prop: "Batch" },
    { name: "packQty", prop: "packQty" },
    { name: "loosQty", prop: "loosQty" },
    { name: "TotalQty", prop: "TotalQty" },
    { name: "loosQty", prop: "rate" },
    { name: "Amount", prop: "amount" },
  ];
  model = new CounterSales();
  ngOnInit(): void {
    this.model.totalItems = this.Items.length;
  }

  addItem() {
    this.Items.push({
      itemName: "",
      Batch: "",
      packQty: "",
      loosQty: "",
      TotalQty: "",
      Rate: "",
      Amount: "",
    });
    this.Items = [...this.Items];
    this.model.totalItems = this.Items.length;
  }

  removeItem(i: number) {
    this.Items.splice(i, 1);
    this.model.totalItems = this.Items.length;
  }

  DisplayFileds(index) {
    this.showFields = index;
    console.log(this.showFields);
  }
  getCounterSalesID() {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    this._purchaseService.getCountersaleById(this.CustomeId).subscribe((ok) => {
      this.model = ok;
      this.Items = ok.counteSaleDetails;
      this.spinner.hide();
    });
  }
  goBack() {
    this._location.back();
  }
  onSubmit() {
    this.model.entryDate = this._purchaseService.toModel(this.entryDatemodel);
    var req = this.model;
    req["counteSaleDetails"] = this.Items;
    this._purchaseService.addCountersale(req).subscribe(
      (ok) => {
        if (ok == "OK") {
          this.toastr.success("Success", "SuccessFully counter Created");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Schedule");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  updatecounter() {
    this.model.entryDate = this._purchaseService.toModel(this.entryDatemodel);
    var req = this.model;
    // req["entryDate"] = dat;
    req["counteSaleDetails"] = this.Items;
    this._purchaseService.updateCountersale(req).subscribe(
      (ok) => {
        if (ok == "OK") {
          this.toastr.success("Success", "SuccessFully counter Created");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Schedule");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
}
