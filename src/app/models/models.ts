export interface Member { 
  id: number;
  lastName: string;
  firstName: string;
  phoneNumber: string
  sex: MemberSEX;
  type: string;
  fonction: string;
  joinDate: string;
  memberCard: boolean;
}


export interface Activity {
  id: number;
  type: string;
  date: string;
  lieu: string;
} 

export enum MemberSEX {
  F = 'M',
  M = 'M'
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

export enum MemberType {
  simple = 'simple',
  bureau = 'bureau'
}

export const TypeMapping: Record<MemberType, string> = {
  [MemberType.bureau]: "Membre Bureau",
  [MemberType.simple]: "Membre Simple"

}

export enum TypeActivity {
  reunion = 'reunion',
  sortie = 'sortie'
}

export const TypeActivityMapping: Record<TypeActivity, string> = {
  [TypeActivity.sortie]: "Sortie",
  [TypeActivity.reunion]: "Reunion"  
}
