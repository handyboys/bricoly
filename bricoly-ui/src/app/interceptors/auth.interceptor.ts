import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from '../services/auth/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('INTERCEPTOR ENGAGED')
    const authToken = this.authService.getToken()
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    })
    console.log(request)
    return next.handle(request);
  }
}
