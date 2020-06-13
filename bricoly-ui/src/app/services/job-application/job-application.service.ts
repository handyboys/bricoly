import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {

  constructor(private http :HttpClient) {

  }
  getjobApplication(job_id,professional_id){
    let body = {job_id , professional_id }
    return this.http.post("http://localhost:8080/jobs/feed",body)
  }
}
