import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class ManufactureService {
  constructor(private http: ApiService) {}
  getManufactures(): Observable<any> {
    return this.http.get("AccountSetup/getManufactureDetails");
  }

  addManfacture(data: any): Observable<any> {
    return this.http.post("AccountSetup/ManfactureCreate/Manufacturer", data);
  }

  getManfactureById(data): Observable<any> {
    return this.http.get("AccountSetup/getManfacture/" + data.id);
  }
  deleteManfactureById(data): Observable<any> {
    return this.http.delete("AccountSetup/deleteManfacture/" + data.id);
  }

  updateManfacture(data: any): Observable<any> {
    return this.http.put("AccountSetup/updateManfacture/" + data.id, data);
  }
}
