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
  jobDraft: JobDraft ;
  constructor() { }
  onActivate(elementRef) {
    console.log(elementRef)
    if (elementRef.selectCategoryEvent){
      elementRef.selectCategoryEvent.subscribe((event :Category) => {
        console.log("cat :",event);
      });
    } else if (elementRef.selectServiceEvent){
      elementRef.selectServiceEvent.subscribe((event:Service)=> {
        console.log("serv :",event);
        console.log(this.jobDraft);
        // this.jobDraft.service_id = event.id
      });
    }
  }
  ngOnInit(): void {}


}
