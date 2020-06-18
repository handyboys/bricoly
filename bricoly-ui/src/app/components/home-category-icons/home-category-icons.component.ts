import { Category } from './../../models/category/category.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JobPostService } from '../../services/jobPost/job-post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-category-icons',
  templateUrl: './home-category-icons.component.html',
  styleUrls: ['./home-category-icons.component.scss']
})
export class HomeCategoryIconsComponent implements OnInit {
  selectCategories: Category[] = [];

  @Output () selectCategoryEvent = new EventEmitter<object>();
  constructor(private jobPost:JobPostService, private route: ActivatedRoute, private router: Router ) {
  //   console.log('sel-cat constructor : ', this.route.snapshot.data)
  //  this.selectCategories = this.route.snapshot.data.categories;
  this.jobPost.getCategories().subscribe(data=>{
    this.selectCategories= [data[0], data[1], data[3]];
  })
  }

  ngOnInit(): void {
  }
  sendCategory(selectedCategory){
    console.log('selectcategory com : ',selectedCategory)
    this.selectCategoryEvent.emit(selectedCategory)
    this.router.navigate(['../select-service'], { relativeTo: this.route });
  }

}
