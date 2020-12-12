import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
export class Purchase {
  public sname: string;
  public saddress: string;
  public GSTNo: string;
  public MobileNo: string;
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
  limitRef = 10;
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
      purchaseDate: "",
      discount: "",
      discAmount: "",
      schdiscAmount: "",
      gst: "",
      taxAmount: "",
      qpk: "",
      srt: "",
      grossAmt: "",
      netAmt: "",
    },
  ];
  model = new Purchase();
  ngOnInit(): void {}
  onSubmit(form) {
    console.log(form.value);
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
      purchaseDate: "",
      discount: "",
      discAmount: "",
      schdiscAmount: "",
      gst: "",
      taxAmount: "",
      qpk: "",
      srt: "",
      grossAmt: "",
      netAmt: "",
    });
  }

  removeItem(i: number) {
    this.Items.splice(i, 1);
  }

  DisplayFileds(index) {
    this.showFields = index;
    console.log(this.showFields);
  }
}
