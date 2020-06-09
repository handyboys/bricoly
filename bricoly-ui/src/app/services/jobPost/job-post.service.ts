import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {Service} from './../../models/service/service.model';
import { Category } from './../../models/category/category.model';

@Injectable({
  providedIn: 'root'
})
export class JobPostService  {
  endpoint : string = 'http://localhost:8080/job-post';
  constructor(private http: HttpClient, private router : Router, private activatedRoute:ActivatedRoute) { }

  getCategories():Observable <Category[]> {
    let api = this.endpoint + '/select-category'
     return this.http.get<Category[]> (api)
     .pipe(
      catchError(this.handleError)
    )
    }

  getServices(id:number) :Observable<Array<Service>> {
   let api = this.endpoint + '/select-service'
    return this.http.post<Array<Service>>(api, {id})
    .pipe(
      catchError(this.handleError)
    )
  }


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
