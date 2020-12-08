import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class CompositionService {
  constructor(private http: ApiService) {}

  getCompositions(): Observable<any> {
    return this.http.get("AccountSetup/getCompositionDetails");
  }

  addComposition(data: any): Observable<any> {
    return this.http.post("AccountSetup/CompositionCreate/Composition", data);
  }

  getCompositionById(data): Observable<any> {
    return this.http.get("AccountSetup/getComposition/" + data.id);
  }
  deleteCompositionById(data): Observable<any> {
    return this.http.delete("AccountSetup/deleteComposition/" + data.id);
  }

  updateComposition(data: any): Observable<any> {
    return this.http.put("AccountSetup/updateComposition/" + data.id, data);
  }
}
