import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ProfDetails } from 'src/app/interfaces/profDetails/prof-details';

@Injectable({
  providedIn: 'root'
})
export class FindProfessionalService {
  
  endpoint : string = 'http://localhost:8080/findProf';

  constructor(private http: HttpClient) { }

  getAllProfessionals(): Observable<ProfDetails[]>{ 
    
   let api = this.endpoint + '/findProf';
   return this.http.get<ProfDetails[]>(api)
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
