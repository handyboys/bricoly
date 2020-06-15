import { JobNotService } from './../../services/jobNot/job-not.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Resolve,Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class JobNotificationService implements Resolve<Object>{

  constructor(
    private router: ActivatedRoute, private jobnot : JobNotService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.jobnot.getNotificaion()
  }

}
