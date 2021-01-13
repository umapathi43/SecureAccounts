import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: ApiService) {}

  getUsers(): Observable<any> {
    return this.http.get("AccountSetup/getCustomerDetails");
  }

  addUser(data: any): Observable<any> {
    return this.http.post("AccountSetup/CustomerCreate/Customer", data);
  }

  getUserById(data): Observable<any> {
    return this.http.get("AccountSetup/getCustomer/" + data.id);
  }
  deleteUserById(data): Observable<any> {
    return this.http.delete("AccountSetup/deleteCustomer/" + data.id);
  }
  getGstTypes(): Observable<any> {
    return this.http.get("AccountSetup/getGstType");
  }
  getPaymentModes(): Observable<any> {
    return this.http.get("AccountSetup/getPaymentModes");
  }
  updateUser(data: any): Observable<any> {
    return this.http.put("AccountSetup/updateCustomer/" + data.id, data);
  }
  getBestBeforeDetails(): Observable<any> {
    return this.http.get("AccountSetup/getBestBeforeDetails");
  }
}
