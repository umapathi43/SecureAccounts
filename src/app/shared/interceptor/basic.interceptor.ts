import { AuthService } from "app/shared/auth/auth.service";
import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { delay, mergeMap, materialize, dematerialize } from "rxjs/operators";

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      req.url == "http://54.157.75.0:9191/authenticate" &&
      req.method === "POST"
    ) {
      return next.handle(req);
    } else {
      const userToken = this.auth.forLocalstorage();
      const modifiedReq = req.clone({
        headers: req.headers.set("Authorization", userToken),
      });
      return next.handle(modifiedReq);
    }
  }
}
