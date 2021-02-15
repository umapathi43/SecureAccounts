import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { ItemService } from "app/services/item.service";

export class RecepitEntry {
  public entryDate: Date;
  public referenceNumber: number;
  public referenceDate: Date;
  public cash: string;
  public amount: string;
  public Remarks: string;
}
@Component({
  selector: "app-stock-adjustment-entry",
  templateUrl: "./stock-adjustment-entry.component.html",
  styleUrls: [
    "./stock-adjustment-entry.component.scss",
    "../../assets/sass/libs/datatables.scss",
  ],
})
export class StockAdjustmentEntryComponent implements OnInit {
  showFields: any;
  itemArray: any[];
  constructor(public itenService: ItemService) {}
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
  // columns = [
  //   { name: "selectAmount", prop: "Item" },
  //   { name: "entryAmount", prop: "entryAmount" },
  //   { name: "Expiry", prop: "expiry" },
  //   { name: "purchaseRate", prop: "purchaseRate" },
  //   { name: "discount", prop: "discount" },
  //   { name: "billDate", prop: "billDate" },
  //   { name: "supplierName", prop: "supplierName" },
  // ];

  public Items: any[] = [
    {
      name: "",
      batch: "",
      expiry: "",
      currentstock: "",
      adjustmentQty: "",
      mrp: "",
      rate: "",
    },
  ];
  columns2 = [
    { name: "Name", prop: "name" },
    { name: "Batch", prop: "batch" },
    { name: "Expiry", prop: "expiry" },
    { name: "MRP", prop: "mrp" },
    { name: "CurrentStock", prop: "currentstock" },
    { name: "Rate", prop: "rate" },
  ];
  model = new RecepitEntry();
  ngOnInit(): void {}
  onSubmit(form) {
    console.log(form.value);
  }
  addItem() {
    this.Items.push({
      name: "",
      batch: "",
      expiry: "",
      currentstock: "",
      adjustmentQty: "",
      mrp: "",
      rate: "",
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
  getItemDetails() {
    this.itenService.getItemDetails().subscribe((ok: any) => {
      this.itemArray = ok.filter((t) => t.status == "A");
    });
  }
}
