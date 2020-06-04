import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

//import {from} from 'rxjs';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss']
})
export class SelectCategoryComponent implements OnInit {
  category:Object = [];
  constructor( private http:HttpClient) {}
  getCategories(){
  this.http.get('http://localhost:8080/jobPost/select-category').subscribe(data =>{ 

    this.category = data; 
    
    })
  }
  ngOnInit(): void {
  this.getCategories();
  }

}
