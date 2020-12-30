import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  constructor(private http: ApiService) {}
  getAccounts(): Observable<any> {
    return this.http.get("AccountSetup/getAccountDetails");
  }

  addAccount(data: any): Observable<any> {
    return this.http.post("AccountSetup/AccountCreate/Accounts", data);
  }

  getAccountById(data): Observable<any> {
    return this.http.get("AccountSetup/getAccount/" + data);
  }
  getAccountHead(): Observable<any> {
    return this.http.get("AccountSetup/getAccountHead");
  }
  getAccountType(): Observable<any> {
    return this.http.get("AccountSetup/getAccountType");
  }
  deleteAccountById(data): Observable<any> {
    return this.http.delete("AccountSetup/deleteAccount/" + data.id);
  }

  updateAccount(data: any): Observable<any> {
    return this.http.put("AccountSetup/updateAccount/" + data.id, data);
  }
}
