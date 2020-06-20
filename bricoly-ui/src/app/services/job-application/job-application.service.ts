import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {

  constructor(private http :HttpClient) {

  }

  /**
      * @function getjobApplication - getting all the job Application's request function
      * @param { job_id } - number representing the job's id
      * @param { professional_id } - number representing the professional's id
      * @returns { Observable } - object representing server response
      */

  getjobApplication(job_id,professional_id){
    let body = {job_id , professional_id }
    return this.http.post("http://localhost:8080/jobs/feed",body)
  }
}
