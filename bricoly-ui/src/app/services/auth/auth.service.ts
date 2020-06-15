import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../../models/user/user.model';

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
    * @function signUpProf - new user sign up as professional request function
    * @param { User } user - object containing new user data
    * @returns { Observable } - object representing server response
    */
    
    signUpProf(user: User): Observable<any> {
      let api = this.endpoint + '/signup-prof';
      console.log('signup-prof service func engaged ..')
      return this.http.post(api, user)
      .pipe(
        catchError(this.handleError)
        )
      }

      /**
      * @function signIn - user sign in request function 
      * @param { User } user - object containing user credentials 
      */

      signIn(user: User) {
        let api = this.endpoint + '/signin';
        console.log('signin service func engaged');
        return this.http.post(api, user)
        .subscribe((res: any) => {
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('userId', res.id);
          localStorage.setItem('userType', res.is_professional)
          console.log('login successful', res)
          // TODO - add appropriate routing upon sucessful signin
        })
      }

      /**
      * @function getToken - fetches saved access token
      * @returns { string } - access token
      */

      getToken() {
        return localStorage.getItem('accessToken');
      }
      
      /**
      * @function logOut - logs out users
      */

      logOut(): void {
        let removeToken = localStorage.removeItem('accessToken');
        // TODO : add login routing after successfull logout
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
    