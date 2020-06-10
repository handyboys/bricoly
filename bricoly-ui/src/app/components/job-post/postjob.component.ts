import { Client } from './../../models/client/client.model';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { JobDraft } from '../../models/jobDraft/jobDraft.model';
import { Service } from '../../models/service/service.model';
import { Category } from '../../models/category/category.model';

import { ClientType } from '../../interfaces/client-type';
import { Coordinates } from '../../interfaces/coordinates';
import { JobDetailsComponent } from '../job-details/job-details.component';


@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.scss']
})
export class PostjobComponent implements OnInit {
  // category : Category
  jobDraft: JobDraft = new JobDraft();

  constructor() { }

  onActivate(elementRef) {
    console.log('Component Origin : ', elementRef);
    console.log('JobDraft : ', this.jobDraft);
    if (elementRef.selectCategoryEvent) {
      elementRef.selectCategoryEvent.subscribe((event: Category) => {
        this.jobDraft.category = event.category;
        this.jobDraft.category_id = event.id;
        localStorage.setItem('selectedCategory', JSON.stringify(event))
      });
    } else if (elementRef.selectServiceEvent) {
      elementRef.category_id = this.jobDraft.category_id
      elementRef.selectServiceEvent.subscribe((event: Service) => {
        this.jobDraft.service_id = event.id;
        this.jobDraft.service = event.service;
      });
    }
    else if (elementRef.selectClientTypeEvent) {
      elementRef.selectClientTypeEvent.subscribe((event: ClientType) => {
        console.log('client_type', event)
        this.jobDraft.client_type = event.type;
        this.jobDraft.related_info = event.related_info;
      });
    } else if (elementRef.selectServiceTypeEvent) {
      elementRef.selectServiceTypeEvent.subscribe((event) => {
        this.jobDraft.service_type = event
      });
    } else if (elementRef.selectJobLocationEvent) {
      console.log('location emitter')
      elementRef.selectJobLocationEvent.subscribe((event: Coordinates) => {
        console.log('Coordinates', event)
        this.jobDraft.latitude = event.lat;
        this.jobDraft.longitude = event.lng;
      })
    } else if (elementRef instanceof JobDetailsComponent) {
      console.log('yeah')
      elementRef.jobDraft = this.jobDraft;
    }
  }

  ngOnInit(): void { }

}
