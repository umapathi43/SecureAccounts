import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { DiscountslabService } from "app/services/discountslab.service";
import { ToastrService } from "ngx-toastr";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
export class DiscountSlab {
  public discountSlabName: string;
  public route: any;
  public id: number;
  public from_amt: any;
  public to_amt: any;
  public discount: any;
}
@Component({
  selector: "app-adddiscountslab",
  templateUrl: "./adddiscountslab.component.html",
  styleUrls: ["./adddiscountslab.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdddiscountslabComponent implements OnInit {
  CustomeId: any;
  model = new DiscountSlab();
  @Input() id: number;
  @Input() data: any;
  isModal: boolean;
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _discountService: DiscountslabService,
    private toastr: ToastrService,
    public activeModal: NgbActiveModal
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getDiscountslabById();
    }
  }

  ngOnInit(): void {
    if (this.id == 0) {
      this.isModal = true;
      console.log(this.data);
      this.model.discountSlabName = this.data.discountSlabName;
    }
  }
  goBack() {
    if (this.isModal) {
      this.activeModal.close(this.model.discountSlabName);
    } else {
      this._location.back();
    }
  }

  onSubmit(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._discountService.addDiscount(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Discount Slab Updated");
        if (this.isModal) {
          this.activeModal.close(this.model.discountSlabName);
        } else {
          this._location.back();
        }
      } else {
        this.toastr.error("Failed", "Failed to update Discount Slab");
      }
    });
  }
  onUpdate(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._discountService.updateDiscount(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Discount Slab Updated");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to update Discount Slab");
      }
    });
  }
  getDiscountslabById() {
    const dta = {
      id: this.CustomeId,
    };
    this._discountService.getDiscountById(dta).subscribe((ok) => {
      console.log(ok);
      this.model = ok;
      document.getElementById("frmcard").click();
    });
  }
}
