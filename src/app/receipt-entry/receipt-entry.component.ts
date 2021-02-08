import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";

export class RecepitEntry {
  public entryDate: Date;
  public referenceNumber: number;
  public referenceDate: Date;
  public cash: string;
  public amount: string;
  public Remarks: string;
}
@Component({
  selector: "app-receipt-entry",
  templateUrl: "./receipt-entry.component.html",
  styleUrls: [
    "./receipt-entry.component.scss",
    "../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ReceiptEntryComponent implements OnInit {
  showFields: any;
  constructor() {}
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
      selectAmount: "",
      entryAmount: "",
      discAmount: "",
      netAmount: "",
    },
  ];
  columns2 = [
    { name: "selectAmount", prop: "selectAmount" },
    { name: "entryAmount", prop: "entryAmount" },
    { name: "discAmount", prop: "discAmount" },
    { name: "netAmount", prop: "netAmount" },
  ];
  model = new RecepitEntry();
  ngOnInit(): void {}
  onSubmit(form) {
    console.log(form.value);
  }
  addItem() {
    this.Items.push({
      selectAmount: "",
      entryAmount: "",
      discAmount: "",
      netAmount: "",
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
}
