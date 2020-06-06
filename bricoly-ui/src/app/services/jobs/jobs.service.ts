import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  endpoint : string = 'http://localhost:8080/jobs';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, public router: Router) { }

  /**
   * @function getAllJobs - get all jobs request
   * @returns observable that contains all jobs data
   */
  getAllJobs(): Observable<any> {
    let api = this.endpoint + '/feed';
    console.log('feed service func engaged ..')
    return this.http.get(api)
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
