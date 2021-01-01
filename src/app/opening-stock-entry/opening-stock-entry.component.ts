import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";

export class OrderGeneration {
  public orderDate: string;
}
@Component({
  selector: "app-opening-stock-entry",
  templateUrl: "./opening-stock-entry.component.html",
  styleUrls: ["./opening-stock-entry.component.scss"],
})
export class OpeningStockEntryComponent implements OnInit {
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
      itemName: "",
      enterbatchno: "",
      enterexpiry: "",
      entermrp: "",
      enterqty: "",
      enterpurchaserate: "",
      srt: "",
      amount: "",
      Qpk: "",
    },
  ];
  columns2 = [
    { name: "itemName", prop: "itemName" },
    { name: "enterbatchno", prop: "enterbatchno" },
    { name: "enterexpiry", prop: "enterexpiry" },
    { name: "entermrp", prop: "entermrp" },
    { name: "stock", prop: "enterqty" },
    { name: "enterpurchaserate", prop: "enterpurchaserate" },
    { name: "srt", prop: "srt" },
    { name: "amount", prop: "amount" },
    { name: "Qpk", prop: "Qpk" },
  ];
  model = new OrderGeneration();
  ngOnInit(): void {}
  onSubmit(form) {
    console.log(form.value);
  }
  addItem() {
    this.Items.push({
      itemName: "",
      orderQty: "",
      minQty: "",
      maxQty: "",
      stock: "",
      ysale: "",
      wsale: "",
      msale: "",
      pmsale: "",
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
