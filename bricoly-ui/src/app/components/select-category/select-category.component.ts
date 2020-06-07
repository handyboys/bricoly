import { Category } from './../../models/category/category.model';
import { Component, OnInit,Input ,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http';


//import {from} from 'rxjs';
let serverUrl = 'http://localhost:8080/jobPost/select-category';
@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss']
})
export class SelectCategoryComponent implements OnInit {
  selectCategories: Category[] = [];
  @Output () selectCategoryEvent = new EventEmitter<object>();
  categoryId;
  constructor( private http:HttpClient ) {
    this.getCategories();
  }
  getCategories(){
  this.http.get(serverUrl).subscribe((data :Category [])=>{
    this.selectCategories = data;
    console.log(this.selectCategories)
    })
  }
  sendCategory(selectedCategory){
    console.log('selectcategory com : ',selectedCategory)
    this.selectCategoryEvent.emit(selectedCategory)
  }
  ngOnInit(): void {

  }

}
