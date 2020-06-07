import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Category } from 'src/app/models/category/category.model';

//import {from} from 'rxjs';

let serverUrl='http://localhost:8080/jobPost/select-category';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss']
})
export class SelectCategoryComponent implements OnInit {
  selectCategories: Category[] = [];
  constructor( private http:HttpClient) {}
  
  getCategories(){
    this.http.get(serverUrl).subscribe((data: Category[]) =>{ 
    this.selectCategories = data; 
    console.log(this.selectCategories)
    
  })
} 
ngOnInit(): void {
  this.getCategories();
}

}
