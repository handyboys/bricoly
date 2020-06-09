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
  constructor() { }

  onActivate(elementRef) {
    console.log('Component Origin : ',elementRef)
    if (elementRef.selectCategoryEvent){
      elementRef.selectCategoryEvent.subscribe((event: Category) => {
        this.categoryId = event.id;
         localStorage.setItem('selectedCategory', JSON.stringify(event))
        });
    } else if (elementRef.selectServiceEvent){
      elementRef.selectServiceEvent.subscribe((event: Service)=> {
        this.jobDraft.service_id = event.id;
        console.log('JobDraft : ', this.jobDraft)
      });
    }
    else if (elementRef.selectRelatedInfoEvent ) {
      elementRef.selectClientTypeEvent.subscribe((event: string)=> {
        this.jobDraft.client_type = event
        console.log('JobDraft : ', this.jobDraft)
      });
    }else if (elementRef.selectRelatedInfoEvent ) {
      elementRef.selectRelatedInfoEvent.subscribe((event: string)=> {
        this.jobDraft.related_info = event
        console.log('JobDraft : ', this.jobDraft)
      });
    }  
    else if (elementRef.selectServiceTypeEvent) {
      elementRef.selectServiceTypeEvent.subscribe((event)=> {
        this.jobDraft.service_type = event
        console.log('JobDraft : ', this.jobDraft)
      });
  }
}

  ngOnInit(): void {}

}
