import { Component, OnInit,Input } from '@angular/core';
import { User } from '../../models/user/user.model';
import {Category} from '../../models/category/category.model';
import { JobPostService } from '../../services/jobPost/job-post.service';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-signup-prof',
  templateUrl: './signup-prof.component.html',
  styleUrls: ['./signup-prof.component.scss']
})
export class SignupProfComponent implements OnInit {
  @Input() pattern: string;

  
  categories : Category[]=[]
  newUser:User = new User();
  passwordConfirmation:string = null;
  
  constructor(private jobPost:JobPostService, private authService: AuthService) {
    
    this.jobPost.getCategories()
   .subscribe((data :Category [])=>{
      this.categories = data;
      });  
   }

  ngOnInit(): void {
  }

  
  onSubmit(form) {
    
    this.newUser.category_id = form.value.profCategory;
    if (navigator.geolocation){ 
       navigator.geolocation.getCurrentPosition((position: Position) => {  
        if (position) {  
            this.newUser.latitude = position.coords.latitude;  
            this.newUser.longitude = position.coords.longitude;  
         }
        });
    } 
    this.authService.signUp(this.newUser)
      .subscribe(data => {
        console.log(data);
        localStorage.setItem('userId', data.id) 
        localStorage.setItem('accessToken', data.accessToken)
      }) 
    console.log(this.newUser);
  }
  get diagnostic() { return JSON.stringify(this.newUser) }
  // TODO : remove when done


}


