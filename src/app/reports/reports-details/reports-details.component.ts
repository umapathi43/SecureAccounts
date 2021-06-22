import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { Location } from "@angular/common";

@Component({
  selector: "app-reports-details",
  templateUrl: "./reports-details.component.html",
  styleUrls: ["./reports-details.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ReportsDetailsComponent implements OnInit {
  public limitRef = 10;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  tempData: any;
  public ColumnMode = ColumnMode;
  rows = [
    { legderName: "test", station: "empty", balance: 666 },
    { legderName: "test", station: "empty", balance: 66 },
    { legderName: "test", station: "empty", balance: 6 },
    { legderName: "test", station: "empty", balance: 798 },
    { legderName: "test", station: "empty", balance: 876 },
  ];
  // column header
  public columns = [
    { name: "ledger", prop: "legderName" },
    { name: "station", prop: "station" },
    { name: "balance", prop: "balance" },
  ];
  constructor(public location: Location) {}

  ngOnInit(): void {}
  updateLimit(limit) {
    this.limitRef = limit.target.value;
  }
  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.areaName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  goBack() {
    this.location.back();
  }
  detailsPage(event) {
    debugger;
    if (event.type == "click") {
      console.log(event.row);
    }
  }
}
