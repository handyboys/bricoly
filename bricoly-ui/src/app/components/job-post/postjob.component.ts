import { Component, OnInit } from '@angular/core';
import { Category } from './../../models/category/category.model';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.scss']
})
export class PostjobComponent implements OnInit {
  category : Category
  constructor() { }
  onActivate(elementRef) {
    console.log(Object.keys(elementRef))
    elementRef.selectCategoryEvent.subscribe(event => {
        console.log("mess :",event);
    });
}
  ngOnInit(): void {
  }
  // receiveCategory($event){
  //   this.category= $event
  //   console.log("jobPost :", this.category)
  // }
}
