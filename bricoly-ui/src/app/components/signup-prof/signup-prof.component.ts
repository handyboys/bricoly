import { Component, OnInit,Input } from '@angular/core';
import { User } from '../../models/user/user.model';
import {Category} from '../../models/category/category.model';

@Component({
  selector: 'app-signup-prof',
  templateUrl: './signup-prof.component.html',
  styleUrls: ['./signup-prof.component.scss']
})
export class SignupProfComponent implements OnInit {
  @Input() pattern: string;
  category:Category = new Category();
  categories : Category[]=[]
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form) {
    console.log(form);
  }

  // TODO : remove when done


}


