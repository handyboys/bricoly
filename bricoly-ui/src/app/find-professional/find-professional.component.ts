import { Component, OnInit } from '@angular/core';
import { ProfDetails } from '../interfaces/profDetails/prof-details';
import { FindProfessionalService } from '../services/findProfessional/find-professional.service';


@Component({
  selector: 'app-find-professional',
  templateUrl: './find-professional.component.html',
  styleUrls: ['./find-professional.component.scss']
})
export class FindProfessionalComponent implements OnInit {
  
  profDetails: ProfDetails [];
  myFilter;

  constructor(private findProf: FindProfessionalService) { 
    
    this.findProf.getAllProfessionals()
    .subscribe((data :ProfDetails [])=>{
      this.profDetails = data;
      console.log('FIND PROFFFFF', data)
    });  
    
  }
  
  // onActivate(elementRef){
  //   console.log(elementRef)
  //   if (elementRef.filterEvent){
  //       elementRef.filterEvent.subscribe((event)=> {
  //         console.log("EVENTTT", event)
  //         this.myFilter = event
       
  //     });
  //   }
  // }

  receiveFilter($event){ 
    this.myFilter = $event;
   }

   filterFunction(){ 
     if(this.myFilter){ 
       console.log("FILTERRRR", this.myFilter);
       return this.profDetails.filter((profDetail)=>{
         console.log("DETAILLLLLL",profDetail); 
        return this.myFilter.category === profDetail.category_id;
       });
     }
   }
  
  ngOnInit(): void {
  }
  
}
