export class Cotisation { 
    id!: number;
    month!:number;
    amount!:number;
    date!:string
    meanOfPayment!:MeanOfPayment;
    description!:string;
    member!:number;
}

export enum MeanOfPayment {
reunion = 'reunion',
sortie = 'sortie'
}

export const MeanOfPaymentMapping: Record<MeanOfPayment, string> = {
[MeanOfPayment.sortie]: "Sortie",
[MeanOfPayment.reunion]: "Reunion"

}
  