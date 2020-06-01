import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint : string = 'http://localhost:8080/auth';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, public router: Router) { }

  /**
   * @function signUp - new user sign up request function
   * @param { User } user - object containing new user data
   * @returns { Observable } - object representing server response
   */
  signUp(user: User): Observable<any> {
    let api = this.endpoint + '/signup';
    console.log('signup service func engaged ..')
    return this.http.post(api, user)
      .pipe(
        catchError(this.handleError)
      )
  }
  
  /**
   * @function handleError - server/client-side error handling function
   * @param {HttpErrorResponse} error - object representing occuring object
   * @returns { Observable } - object representing the occuring error 
   */
  handleError(error : HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // Server-side error
      msg = `Error code : ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
