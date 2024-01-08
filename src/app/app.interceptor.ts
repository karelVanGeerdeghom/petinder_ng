import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('username') !== null) {
      const reqCopy = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('username')!}`),
      });

      return next.handle(reqCopy);
    }

    return next.handle(req);
  }
}
