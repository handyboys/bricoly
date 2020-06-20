import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Reviews } from '../../models/reviews/reviews.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  endpoint : string = ' http://localhost:8080/reviews/reviews';
  constructor(private http: HttpClient, public router: Router) {}

    /**
    * @function getReviews - getting all the Reviews's request function
    * @param { Reviews } reviews - object containing new review's data
    * @returns { Observable } - object representing server response
    */

  getReviews(reviews:Reviews): Observable<Reviews[]> {
    let api = this.endpoint
    return this.http.post<Reviews[]>(api,reviews)
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
