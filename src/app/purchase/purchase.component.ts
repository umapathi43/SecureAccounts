import { Component, OnInit } from "@angular/core";
export class Purchase {
  public sname: string;
  public saddress: string;
  public GSTNo: string;
  public MobileNo: string;
}

@Component({
  selector: "app-purchase",
  templateUrl: "./purchase.component.html",
  styleUrls: ["./purchase.component.scss"],
})
export class PurchaseComponent implements OnInit {
  showFields: any;
  constructor() {}
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
