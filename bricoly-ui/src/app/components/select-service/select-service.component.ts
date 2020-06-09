import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import {Service} from './../../models/service/service.model';
import { JobPostService } from '../../services/jobPost/job-post.service';
import { Category } from 'src/app/models/category/category.model';


@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.component.html',
  styleUrls: ['./select-service.component.scss']
})
export class SelectServiceComponent implements OnInit {
  
  services: Service[] = [];
  
  @Output () selectServiceEvent = new EventEmitter<object>();
  
  constructor(private jobPost:JobPostService) {
    let category= JSON.parse(localStorage.getItem("selectedCategory"))
    console.log(category)
    let categoryId = category.id; 
    this.jobPost.getServices(categoryId)
    .subscribe((result: Service[]) => {
      console.log('res', result ,categoryId);
      this.services = result;
      
    });
    
  }
  
  ngOnInit(): void {}
  
  sendService(selectedService){
    this.selectServiceEvent.emit(selectedService)
  }
  
}

