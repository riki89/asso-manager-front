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
  sex!:SEXE;
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

export enum SEXE {
  F = 'Feminin',
  M = 'Masculin'
}
