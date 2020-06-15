import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { JobPostService } from '../../services/jobPost/job-post.service';
import { Service } from '../../models/service/service.model';
import { Category } from 'src/app/models/category/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class ServicesResolverService implements Resolve<any> {

  constructor(
    private router: ActivatedRoute, private jobPost: JobPostService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Service[]> {
    // const id: number = route.params['category_id'];
    const cat: Category = JSON.parse(localStorage.getItem('selectedCategory'));
    return this.jobPost.getServices(cat.id)
  }
}
