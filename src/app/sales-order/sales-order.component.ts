import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";

export class SalesOrder {
  public mobileNo: Date;
  public entryDate: Date;
  public deliveryDate: Date;
  public customerName: string;
  public customerAddress: string;
}
@Component({
  selector: "app-sales-order",
  templateUrl: "./sales-order.component.html",
  styleUrls: [
    "./sales-order.component.scss",
    "../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class SalesOrderComponent implements OnInit {
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
    { name: "item", prop: "Item" },
    { name: "Qty", prop: "Qty" },
  ];

  public Items: any[] = [
    {
      item: "",
      qty: "",
    },
  ];
  columns2 = [
    { name: "item", prop: "Item" },
    { name: "qty", prop: "Qty" },
  ];
  model = new SalesOrder();
  ngOnInit(): void {}
  onSubmit(form) {
    console.log(form.value);
  }
  addItem() {
    this.Items.push({
      item: "",
      qty: "",
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
