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
    return this.http.post("AccountSetup/AccountCreate/Account", data);
  }

  getAccountById(data): Observable<any> {
    return this.http.get("AccountSetup/getAccount/" + data.id);
  }
  deleteAccountById(data): Observable<any> {
    return this.http.delete("AccountSetup/deleteAccount/" + data.id);
  }

  updateAccount(data: any): Observable<any> {
    return this.http.put("AccountSetup/updateAccountType/" + data.id, data);
  }
}
