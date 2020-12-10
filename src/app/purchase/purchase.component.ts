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
  constructor() {}
  model = new Purchase();
  ngOnInit(): void {}
  onSubmit(form) {
    console.log(form.value);
  }
}
