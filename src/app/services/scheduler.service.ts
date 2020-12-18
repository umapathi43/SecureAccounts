import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class SchedulerService {
  constructor(private http: ApiService) {}
  getSchedulers(): Observable<any> {
    return this.http.get("AccountSetup/getSchedulerDetails");
  }

  getWarnings(): Observable<any> {
    return this.http.get("AccountSetup/getWarningDetails");
  }

  addScheduler(data: any): Observable<any> {
    return this.http.post("AccountSetup/SchedulerCreate/Scheduler", data);
  }

  getSchedulerById(data): Observable<any> {
    return this.http.get("AccountSetup/getScheduler/" + data.id);
  }
  deleteSchedulerById(data): Observable<any> {
    return this.http.delete("AccountSetup/deleteScheduler/" + data.id);
  }

  updateScheduler(data: any): Observable<any> {
    return this.http.put("AccountSetup/updateScheduler/" + data.id, data);
  }
}
