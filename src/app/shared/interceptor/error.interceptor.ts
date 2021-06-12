import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { AuthService } from "./../auth/auth.service";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthService,
    private spinner: NgxSpinnerService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 403) {
          // auto logout if 403 response returned from api
          this.authenticationService.logout();
          // location.reload(true);
          this.spinner.hide();
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
