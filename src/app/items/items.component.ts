import { filter } from "rxjs/operators";
import { ItemService } from "./../services/item.service";
import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { DatatableComponent, ColumnMode } from "@swimlane/ngx-datatable";
import swal from "sweetalert2";
import * as xlsx from "xlsx";
import * as FileSaver from "file-saver";
declare var jsPDF: any;

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ItemsComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("tableRowDetails") tableRowDetails: any;
  // row data
  public rows: any[];
  //   = [
  //   {
  //     ID: 300,
  //     Name: "dean3004",
  //     Packing: "38484858578",
  //     QtyPerPack: "Dean Stanley",
  //     Mfg: "Dean Stanley",
  //     Group: "234764553d",
  //     Category: 5000,
  //     Schedule: 4,
  //     RackNo: 2000,
  //     RackGroup: 3,
  //     mindiscandmaxdisc: "10-20",
  //     minqtyandmaxqty: "100-500",
  //     gst: "100",
  //     hsnno: "234",
  //     ratea: "334",
  //     ratebuptoh: "344",
  //     discslab: "10",
  //   },
  // ];
  public ColumnMode = ColumnMode;
  public limitRef = 10;
  exportColumns: any;
  item: any;

  /**
   * rowDetailsToggleExpand
   *
   * @param row
   */
  rowDetailsToggleExpand(row) {
    this.tableRowDetails.rowDetail.toggleExpandRow(row);
  }
  // column header
  public columns = [
    { name: "ID", prop: "Id" },
    { name: "Name", prop: "itemName" },
    { name: "Packing", prop: "packName" },
    { name: "QtyPerPack", prop: "qty_per_pack" },
    { name: "Mfg", prop: "mgf" },
    { name: "Group", prop: "gropu" },
    { name: "Category", prop: "Category" },
    { name: "Schedule", prop: "scheduler" },
    { name: "RackNo", prop: "RackNo" },
    { name: "RackGroup", prop: "RackGroup" },
    { name: "mindiscandmaxdisc", prop: "mindiscandmaxdisc" },
    { name: "minqtyandmaxqty", prop: "minqtyandmaxqty" },
    { name: "gst", prop: "gst" },
    { name: "hsnno", prop: "hsnno" },
    { name: "ratea", prop: "ratea" },
    { name: "ratebuptoh", prop: "ratebuptoh" },
    { name: "discslab", prop: "discslab" },
    { name: "Actions", prop: "Actions" },
  ];

  // private
  private tempData = [];

  constructor(public itenService: ItemService) {
    // this.getItemDetails();
    // this.tempData = this.rows;
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * filterUpdate
   *
   * @param event
   */
  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.Username.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  /**
   * updateLimit
   *
   * @param limit
   */
  updateLimit(limit) {
    this.limitRef = limit.target.value;
  }
  Confirm() {
    swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2F8BE6",
        cancelButtonColor: "#F55252",
        confirmButtonText: "Yes, delete it!",
        customClass: {
          confirmButton: "btn btn-warning",
          cancelButton: "btn btn-danger ml-1",
        },
        buttonsStyling: false,
      })
      .then(function (result) {
        if (result.value) {
          swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Your record has been deleted.",
            customClass: {
              confirmButton: "btn btn-success",
            },
          });
        } else if (result.dismiss === swal.DismissReason.cancel) {
          swal.fire({
            title: "Cancelled",
            text: "Your record is safe :)",
            icon: "error",
            customClass: {
              confirmButton: "btn btn-success",
            },
          });
        }
      });
  }
  ngOnInit(): void {
    this.getItemDetails();
    this.exportColumns = this.columns.map((col) => ({
      title: col.name,
      dataKey: col.prop,
    }));
  }
  getItemDetails() {
    this.itenService.getItemDetails().subscribe((ok: any) => {
      this.item = ok.filter((t) => t.status == "A");
      this.rows = ok.filter((t) => t.status == "A");
      this.rows.forEach((e) => {
        e["mgf"] = e.manufactureEntity.manufacturerName;
        e["group"] = e.groupEntity.groupName;
        e["scheduler"] = e.scheduleEntity.schedulerName;
        e["mindiscandmaxdisc"] = e.min_amt + "-" + e.max_amt;
        e["minqtyandmaxqty"] = e.min_qty + "-" + e.max_qty;
        e["ratea"] = e.rateA;
        e["discslab"] = e.discSalbEntity.discountSlabName;
      });
      this.tempData = this.rows;
      this.table.element.click();
      console.log(this.item, "tennnnn");
    });
  }
  exportPdf() {
    let doc = new jsPDF("l", "pt");
    doc.autoTable(this.exportColumns, this.rows);
    doc.save("Item.pdf");
  }

  exportExcel() {
    const worksheet = xlsx.utils.json_to_sheet(this.item);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
    const excelBuffer: any = xlsx.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    this.saveAsExcelFile(excelBuffer, "Item");
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    let EXCEL_EXTENSION = ".xlsx";
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
    );
  }
}
