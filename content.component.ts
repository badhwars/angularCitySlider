import { Component, OnInit } from '@angular/core';
import {City} from '../citites';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

i=1;
c1 : City = new City("Paris","France","../../assets/paris.jpg");
c2: City = new City("Sydney","Australia","../../assets/sydney.jpg");
 c3: City = new City("London","England","../../assets/london.jpg");
 c4: City = new City("New York","America","../../assets/newyork.jpg");
 c5: City = new City("Mumbai","India","../../assets/mumbai.jpg");
  array:City[] = [this.c1,this.c2,this.c3,this.c4,this.c5];

  next(){
   if(this.i<4){
     this.i++;
   }
   else this.i=0;
    return this.i;
     
    }
    prev(){
      if(this.i>0){
        this.i--;
      }
      else this.i=4;
       return this.i;
        
       }
  }

