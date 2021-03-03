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

  getpurchaseEntry(): Observable<any> {
    return this.http.get("PurchaseEntry/getAll");
  }
  addPurchaseEntry(value): Observable<any> {
    return this.http.post("PurchaseEntry/Purchase", value);
  }
  getPurchaseId(value): Observable<any> {
    return this.http.get("PurchaseEntry/get/" + value);
  }
}
