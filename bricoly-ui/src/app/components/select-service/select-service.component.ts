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
  category_id: number;
  
  @Output () selectServiceEvent = new EventEmitter<object>();
  
  constructor(private jobPostService:JobPostService) {
    this.category_id = JSON.parse(localStorage.getItem("selectedCategory"))
    // console.log(category)
    // let categoryId = category.id; 
    this.jobPostService.getServices(this.category_id)
    .subscribe((result: Service[]) => {
      console.log('res', result ,this.category_id);
      this.services = result;
    });
  }
  
  ngOnInit(): void {}
  
  sendService(selectedService){
    this.selectServiceEvent.emit(selectedService)
  }
  
}

