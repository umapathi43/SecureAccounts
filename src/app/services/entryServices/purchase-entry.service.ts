import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../api.service";

@Injectable({
  providedIn: "root",
})
export class PurchaseEntryService {
  constructor(private http: ApiService) {}

  getSettingsDetails(): Observable<any> {
    return this.http.get("PurchaseEntry/getSettingDetails");
  }

  updateSettingsDetails(value): Observable<any> {
    return this.http.put("PurchaseEntry/updateSetting/" + value.id, value);
  }

  //////purchase  Entry//////////
  getpurchaseEntry(): Observable<any> {
    return this.http.get("PurchaseEntry/getAll");
  }
  addPurchaseEntry(value): Observable<any> {
    return this.http.post("PurchaseEntry/Purchase", value);
  }

  updatePurchaseEntry(value): Observable<any> {
    return this.http.post("PurchaseEntry/Update/" + value.id, value);
  }
  getPurchaseId(value): Observable<any> {
    return this.http.get("PurchaseEntry/getPurchaseInvoice/" + value);
  }

  //////open stock//////////
  getOpenStockEntry(): Observable<any> {
    return this.http.get("OpeningStock/getAllDetails");
  }
  addOpenStockEntry(value): Observable<any> {
    return this.http.post("OpeningStock/OpenStock", value);
  }
  updateOpenStockEntry(value): Observable<any> {
    return this.http.post("OpeningStock/UpdateOpenStock/" + value.id, value);
  }
  getOpenStockEntryById(value): Observable<any> {
    return this.http.get("OpeningStock/getOpenStock/" + value);
  }

  ////shortage entry////////////////
  getShortageEntry(): Observable<any> {
    return this.http.get("ShortageEntry/getShortageDetails");
  }
  getShortageEntryById(value): Observable<any> {
    return this.http.get("ShortageEntry/getShortageDetails/" + value);
  }
}
