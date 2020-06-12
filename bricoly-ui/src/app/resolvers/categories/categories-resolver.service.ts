import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Resolve } from '@angular/router';
import { JobPostService } from 'src/app/services/jobPost/job-post.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesResolverService implements Resolve<Array<Category>>{

  constructor(
    private router: ActivatedRoute, private jobsServie: JobPostService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Array<Category>> {
    return this.jobsServie.getCategories();
  }
}
