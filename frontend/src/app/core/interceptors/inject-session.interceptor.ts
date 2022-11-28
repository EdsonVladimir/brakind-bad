import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try {
      const token = localStorage.getItem('token');
      let newRequest = request
      newRequest = request.clone(
        {
          setHeaders: {
            authorization: `Bearer ${token}`,
            CUSTOM_HEADER: 'HOLA'
          }
        }
      )

      return next.handle(newRequest);

    } catch (e) {
      console.log('🔴🔴🔴 Ojito error', e)
      return next.handle(request);
    }
  }
}
