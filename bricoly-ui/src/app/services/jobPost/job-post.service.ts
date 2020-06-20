import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Service } from './../../models/service/service.model';
import { Category } from './../../models/category/category.model';
import { JobDraft } from 'src/app/models/jobDraft/jobDraft.model';

@Injectable({
  providedIn: 'root'
})
export class JobPostService {
  endpoint: string = 'http://localhost:8080/job-post';
  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { }

  /**
    * @function getCategories - getting all the Categories's request function
    * @param { Category } Category - Object containing the categories' data
    * @returns { Observable } - object representing server response
    */

  getCategories(): Observable<Category[]> {
    let api = this.endpoint + '/select-category'
    return this.http.get<Category[]>(api)
      .pipe(
        catchError(this.handleError)
      )
  }

  /**
    * @function getServices - getting all the Services's request function
    * @param { id } - number representing the service id 
    * @param { Service } - object containing the services' data
    * @returns { Observable } - object representing server response
    */

  getServices(id: number): Observable<Array<Service>> {
    let api = this.endpoint + '/select-service'
    return this.http.post<Array<Service>>(api, { id })
      .pipe(
        catchError(this.handleError)
      )
  }

  /**
    * @function createJob -  new job creation request function
    * @param { JobDraft } draft - 
    * @param { client_id } - 
    * @returns { Observable } - object representing server response
    */

  createJob(draft: JobDraft): Observable<any> {
    const client_id: number = Number(localStorage.getItem("userId"));
    // Adding client id to draft
    draft.client_id = client_id;
    let api = this.endpoint + '/create-job';
    return this.http.post(api, draft)
      .pipe(
        catchError(this.handleError)
      )
  }

  
  /**
  * @function handleError - server/client-side error handling function
  * @param {HttpErrorResponse} error - object representing occuring object
  * @returns { Observable } - object representing the occuring error
  */

  handleError(error: HttpErrorResponse) {
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
