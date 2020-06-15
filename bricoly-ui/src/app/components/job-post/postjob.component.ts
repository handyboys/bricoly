import { Client } from './../../models/client/client.model';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { JobDraft } from '../../models/jobDraft/jobDraft.model';
import { Service } from '../../models/service/service.model';
import { Category } from '../../models/category/category.model';


@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.scss']
})
export class PostjobComponent implements OnInit {
  // category : Category
  jobDraft: JobDraft = new JobDraft();
  categoryId;

  constructor() {}
  
  onActivate(elementRef) {
    console.log(elementRef)
    if (elementRef.selectCategoryEvent){
      elementRef.selectCategoryEvent.subscribe((event :Category) => {
        console.log('event', event) 
        this.categoryId = event.id;
         localStorage.setItem('selectedCategory', JSON.stringify(event))
        });
    } else if (elementRef.selectServiceEvent){
      elementRef.selectServiceEvent.subscribe((event:Service)=> {
      });
    }
    else if (elementRef.selectRelatedInfoEvent ) {
      elementRef.selectClientTypeEvent.subscribe((event)=> {
        this.jobDraft.client_type = event
        console.log('select Client Type :' , event)
      });
    }else if (elementRef.selectRelatedInfoEvent ) {
      elementRef.selectRelatedInfoEvent.subscribe((event)=> {
        this.jobDraft.related_info = event
        console.log('select Related Info :' , event)
      });
    }  
    else if (elementRef.selectServiceTypeEvent) {
      elementRef.selectServiceTypeEvent.subscribe((event)=> {
        this.jobDraft.service_type = event
        console.log('select Service Type :' , event)
      });
  }
}

  ngOnInit(): void {}

}
