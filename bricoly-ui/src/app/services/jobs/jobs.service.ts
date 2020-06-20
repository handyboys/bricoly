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
      * @returns { Observable } - object representing server response
   */

  getAllJobs(): Observable<any> {
    const id : number = Number(localStorage.getItem('userId'))
    let api = this.endpoint + '/feed';
    console.log('History service func engaged ..')
    return this.http.get(api)
      .pipe(
        catchError(this.handleError)
      )
  }
  /**
   * @function getAllJobs - get all jobs request basing on the user id 
   * @param {id} - number representing the user id
   * @returns { Observable } - object representing server response
   */

  getJobHistory(): Observable<any> {
    const id : number = Number(localStorage.getItem('userId'))
    let api = this.endpoint + `/history/${id}`;
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
