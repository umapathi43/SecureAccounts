import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";

export class OrderGeneration {
  public orderDate: string;
  public QtyPerPack: string;
  public batchNo: string;
  public expiry: string;
  public mrp: string;
  public purchaseRate: string;
  public saleRate: string;
}
@Component({
  selector: "app-batch-details",
  templateUrl: "./batch-details.component.html",
  styleUrls: ["./batch-details.component.scss"],
})
export class BatchDetailsComponent implements OnInit {
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
      batchno: "",
      expiry: "",
      mrp: "",
      purchaserate: "",
      salerate: "",
      specialsalerate: "",
      availablestock: "",
      quantityperpack: "",
    },
  ];
  columns2 = [
    { name: "batchno", prop: "batchno" },
    { name: "expiry", prop: "expiry" },
    { name: "mrp", prop: "mrp" },
    { name: "purchaserate", prop: "purchaserate" },
    { name: "salerate", prop: "salerate" },
    { name: "specialsalerate", prop: "specialsalerate" },
    { name: "availablestock", prop: "availablestock" },
    { name: "quantityperpack", prop: "quantityperpack" },
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
