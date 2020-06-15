import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/category/category.model';
import { JobPostService } from '../../services/jobPost/job-post.service';
import * as cities from '../../../../cities.js'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  categories : Category [];
  tunCities = cities;
  filter;


  @Output () filterEvent = new EventEmitter();

  constructor(private findCat: JobPostService) {
    
    this.findCat.getCategories()
    .subscribe((result :Category [])=>{
       this.categories = result;
       });  
       console.log(this.tunCities)
  }

  ngOnInit(): void {
  
  }
  filterSearch(f: NgForm){ 
  this.filter = f.value;  
    console.log(this.filter);
    this.filterEvent.emit(this.filter)
  }

  sendFilter(){
    
  }
}
