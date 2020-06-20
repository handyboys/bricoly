import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobNotService {
  endpoint = 'http://localhost:8080/jobs'
  constructor(private http: HttpClient, private router : Router, private activatedRoute:ActivatedRoute) { }

  /**
    * @function getNotificaion - getting all the notification's request function
    * @param { id } - number representing the user id
    * @returns { Observable } - object representing server response
    */

  getNotificaion(){
    const id : number = Number(localStorage.getItem('userId'))
    let api = this.endpoint + `/notification/${id}`
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
