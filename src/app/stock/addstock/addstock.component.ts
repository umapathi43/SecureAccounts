import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { StockService } from "app/services/stock.service";
import { BranchService } from "app/services/branch.service";
import { ToastrService } from "ngx-toastr";
export class Stock {
  public stockName: string;
  public id: any;
  public barnchCreation: any = {
    id: "",
  };
}
@Component({
  selector: "app-addstock",
  templateUrl: "./addstock.component.html",
  styleUrls: ["./addstock.component.scss"],
})
export class AddstockComponent implements OnInit {
  CustomeId: any;
  model = new Stock();
  branchList: any;
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _stockService: StockService,
    private _branchService: BranchService,
    private toastr: ToastrService
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getStockById();
    }
  }

  ngOnInit(): void {
    this.getBranches();
  }
  goBack() {
    this._location.back();
  }

  onSubmit(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._stockService.addStock(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Stock Updated");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to update Stock");
      }
    });
  }
  getBranches() {
    this._branchService.getBranchs().subscribe((ok) => {
      console.log(ok);
      this.branchList = ok;
    });
  }
  onUpdate(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._stockService.updateStock(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Stock Updated");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to update Stock");
      }
    });
  }
  getStockById() {
    const dta = {
      id: this.CustomeId,
    };
    this._stockService.getStockById(dta).subscribe((ok) => {
      console.log(ok);
      this.model = ok;
      document.getElementById("frmcbdy").click();
    });
  }
}
