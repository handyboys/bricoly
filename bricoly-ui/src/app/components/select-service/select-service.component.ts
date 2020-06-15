import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import {Service} from './../../models/service/service.model';
import { JobPostService } from '../../services/jobPost/job-post.service';
import { Category } from 'src/app/models/category/category.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.component.html',
  styleUrls: ['./select-service.component.scss']
})
export class SelectServiceComponent implements OnInit {
  
  services: Service[] = [];
  category_id: number;
  
  @Output () selectServiceEvent = new EventEmitter<object>();
  
  constructor(private jobPostService:JobPostService, private route:ActivatedRoute) {
    this.services = this.route.snapshot.data.services;
  }
  
  ngOnInit(): void {}
  
  sendService(selectedService){
    this.selectServiceEvent.emit(selectedService)
  }
  
}

