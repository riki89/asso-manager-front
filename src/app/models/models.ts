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
  type!:string;
  date!:string;
  // date:Date = new Date();
  lieu!:string;
} 

export enum SEXE {
  F = 'Feminin',
  M = 'Masculin'
}

export enum Fonction {
  president = 'president',
  vice_presi = 'vice_presi',
  tresorier = 'tresorier',
  ges_comptes = 'ges_comptes',
  secretaire = 'secretaire',
  finance = 'finance'
}

export const FonctionMapping: Record<Fonction, string> = {
  [Fonction.president]: 'President de l\'association',
  [Fonction.vice_presi]: 'Vice President',
  [Fonction.tresorier]: 'Tresorier',
  [Fonction.ges_comptes]: 'Gestionnaire des comptes',
  [Fonction.secretaire]: 'Secretaire Generale',
  [Fonction.finance]: 'Finance'
}

export enum Type {
  simple = 'simple',
  bureau = 'bureau'
}

export const TypeMapping: Record<Type, string> = {
  [Type.bureau]: "Membre Bureau",
  [Type.simple]: "Membre Simple"
}
