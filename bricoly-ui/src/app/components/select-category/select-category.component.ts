import { Category } from './../../models/category/category.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JobPostService } from '../../services/jobPost/job-post.service';
import { ActivatedRoute, Router } from '@angular/router';


//import {from} from 'rxjs';
@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss']
})
export class SelectCategoryComponent implements OnInit {
  
  selectCategories: Category[] = [];
  
  @Output () selectCategoryEvent = new EventEmitter<object>();
  
  constructor( private jobPost:JobPostService, private route: ActivatedRoute, private router: Router ) {
  console.log('sel-cat constructor : ', this.route.snapshot.data)
   this.selectCategories = this.route.snapshot.data.categories;
  }
  
  ngOnInit(): void {

  }

  sendCategory(selectedCategory){
    console.log('selectcategory com : ',selectedCategory)
    this.selectCategoryEvent.emit(selectedCategory)
    this.router.navigate(['../select-service'], { relativeTo: this.route });
  }
 

}
