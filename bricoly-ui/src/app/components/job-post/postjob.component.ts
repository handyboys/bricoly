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
  
  categoryId;

  constructor() { }
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
  }

  ngOnInit(): void {}


}
