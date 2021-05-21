import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-purchase-entry-invoice",
  templateUrl: "./purchase-entry-invoice.component.html",
  styleUrls: ["./purchase-entry-invoice.component.scss"],
})
export class PurchaseEntryInvoiceComponent implements OnInit {
  active = 1;
  activeTab = "general";
  constructor() {}

  ngOnInit(): void { }
  activeswitch(action) {
    this.activeTab = action;
  }
}
