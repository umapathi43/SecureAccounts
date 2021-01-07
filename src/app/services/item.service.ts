import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class ItemService {
  constructor(private http: ApiService) {}

  getItemDetails(): Observable<any> {
    return this.http.get("AccountSetup/getItemDetails");
  }
}
