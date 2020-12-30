import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
export class PaymentEntry {
  public entryDate: string;
  public amount: string;
  public refnumber: string;
  public refDate: string;
}
@Component({
  selector: "app-paymententry",
  templateUrl: "./paymententry.component.html",
  styleUrls: [
    "./paymententry.component.scss",
    "../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class PaymententryComponent implements OnInit {
  showFields: any;
  constructor() {}
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("tableRowDetails") tableRowDetails: any;
  exportColumns: any;
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
  model = new PaymentEntry();
  public Items: any[] = [
    {
      creditType: "",
      entryAmount: "",
      entrydiscount: "",
      netAmount: "",
      // qty: "",
      // freeQty: "",
      // mrp: "",
      // purchaseDate: "",
      // discount: "",
      // discAmount: "",
      // schdiscAmount: "",
      // gst: "",
      // taxAmount: "",
      // qpk: "",
      // srt: "",
      // grossAmt: "",
      // netAmt: "",
    },
  ];
  rowDetailsToggleExpand(row) {
    this.tableRowDetails.rowDetail.toggleExpandRow(row);
  }
  // column header
  columns = [
    { name: "Credit Type", prop: "creditType" },
    { name: "Entry Amount", prop: "entryAmount" },
    { name: "Entry Discount", prop: "entrydiscount" },
    { name: "Net Amount", prop: "netAmount" },
  ];
  columns2 = [
    { name: "name", prop: "name" },
    { name: "batch", prop: "batch" },
    { name: "expiryDate", prop: "expiryDate" },
    { name: "mfgDate", prop: "mfgDate" },
  ];
  // model = new Purchase();
  ColumnMode = ColumnMode;

  ngOnInit(): void {}
  addItem() {
    this.Items.push({
      creditType: "",
      entryAmount: "",
      entrydiscount: "",
      netAmount: "",
      // bestBefore: "",
      // qty: "",
      // freeQty: "",
      // mrp: "",
      // purchaseDate: "",
      // discount: "",
      // discAmount: "",
      // schdiscAmount: "",
      // gst: "",
      // taxAmount: "",
      // qpk: "",
      // srt: "",
      // grossAmt: "",
      // netAmt: "",
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
  onSubmit(form) {
    console.log(form.value);
  }
}
