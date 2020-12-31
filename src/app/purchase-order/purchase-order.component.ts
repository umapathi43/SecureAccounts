import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";

export class PurchesOrder {
  public orderDate: string;
  public suppliers: string;
}
@Component({
  selector: "app-purchase-order",
  templateUrl: "./purchase-order.component.html",
  styleUrls: ["./purchase-order.component.scss"],
})
export class PurchaseOrderComponent implements OnInit {
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
      orderQty: "",
      minQty: "",
      maxQty: "",
      stock: "",
      ysale: "",
      wsale: "",
      msale: "",
      pmsale: "",
    },
  ];
  columns2 = [
    { name: "itemName", prop: "itemName" },
    { name: "orderQty", prop: "baorderQtytch" },
    { name: "minQty", prop: "minQty" },
    { name: "maxQty", prop: "maxQty" },
    { name: "stock", prop: "stock" },
    { name: "ysale", prop: "ysale" },
    { name: "wsale", prop: "wsale" },
    { name: "msale", prop: "msale" },
    { name: "pmsale", prop: "pmsale" },
  ];
  model = new PurchesOrder();
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
