import { Component, OnInit } from '@angular/core';
import { ProfDetails } from '../../interfaces/profDetails/prof-details';
import { FindProfessionalService } from '../../services/findProfessional/find-professional.service';


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
  
  receiveFilter($event){ 
    this.myFilter = $event;
    if(this.myFilter){ 

      console.log("FILTERRRR", this.myFilter);
      return this.profDetails.filter(profDetail =>{
      return  this.myFilter.category === profDetail.category_id;
     });
    }
  }
  
  ngOnInit(): void {
 
  }
  
}
