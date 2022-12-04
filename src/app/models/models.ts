import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Member { 
  id!: number;
  lastName!:string;
  firstName!:string;
  phoneNumber!:string
  sex!:string;
  type!:string;
  function!:string;
  joinDate!:string;
  memberCard:boolean = false;
}


export class Activity {
  id!:number;
  date:Date = new Date();
  lieu!:string;
}
