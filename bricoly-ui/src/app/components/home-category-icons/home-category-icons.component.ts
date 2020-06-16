import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from './../../models/category/category.model';
import { JobPostService } from '../../services/jobPost/job-post.service';

@Component({
  selector: 'app-home-category-icons',
  templateUrl: './home-category-icons.component.html',
  styleUrls: ['./home-category-icons.component.scss']
})
export class HomeCategoryIconsComponent implements OnInit {
  selectCategories: Category[] = [];
  @Output () selectCategoryEvent = new EventEmitter<object>();
  constructor( private jobPost:JobPostService ) {
   this.jobPost.getCategories()
   .subscribe((data :Category [])=>{
      this.selectCategories = data;
      });
  }

  ngOnInit(): void {

  }

  sendCategory(selectedCategory){
    console.log('selectcategory com : ',selectedCategory)
    this.selectCategoryEvent.emit(selectedCategory)
  }


}
