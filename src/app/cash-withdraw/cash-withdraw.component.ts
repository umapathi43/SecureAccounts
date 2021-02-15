import { Component, OnInit } from "@angular/core";

export class CashWithdraw {
  public entryDate: Date;
  public amount: number;
  public bankName: Date;
}

@Component({
  selector: "app-cash-withdraw",
  templateUrl: "./cash-withdraw.component.html",
  styleUrls: [
    "./cash-withdraw.component.scss",
    "../../assets/sass/libs/datatables.scss",
  ],
})
export class CashWithdrawComponent implements OnInit {
  constructor() {}

  model = new CashWithdraw();
  ngOnInit(): void {}
  onSubmit(form) {
    console.log(form.value);
  }
}
