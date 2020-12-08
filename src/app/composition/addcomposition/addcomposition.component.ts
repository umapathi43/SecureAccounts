import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ToastrService } from "ngx-toastr";
import { CompositionService } from "app/services/composition.service";
export class Composition {
  id: number;
  cName: string;
}
@Component({
  selector: "app-addcomposition",
  templateUrl: "./addcomposition.component.html",
  styleUrls: ["./addcomposition.component.scss"],
})
export class AddcompositionComponent implements OnInit {
  CustomeId: any;
  model = new Composition();
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _compositionService: CompositionService,
    private toastr: ToastrService
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getCompositionById();
    }
  }

  ngOnInit(): void {}
  goBack() {
    this._location.back();
  }

  onSubmit(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._compositionService.addComposition(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Composition Added");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to add Composition");
      }
    });
  }
  onUpdate(form: any) {
    console.log("clicked");

    console.log(this.model);
    // this.submitted = true;
    this._compositionService.updateComposition(this.model).subscribe((ok) => {
      console.log(ok);
      if (ok == "OK") {
        this.toastr.success("Success", "Composition Updated");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to update Composition");
      }
    });
  }
  getCompositionById() {
    const dta = {
      id: this.CustomeId,
    };
    this._compositionService.getCompositionById(dta).subscribe((ok) => {
      console.log(ok);
      this.model = ok;
    });
  }
}
