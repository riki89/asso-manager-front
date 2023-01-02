import { Member } from "./models";

export class Cotisation { 
    id!: number;
    month!:string;
    amount!:number;
    date!:string
    meanOfPayment!:MeanOfPayment;
    description!:string;
    member!:Member;
}

export enum MeanOfPayment {
om = 'om',
wave = 'wave',
tigo = 'tigo',
western = 'western',
moneygram = 'moneygram',
cardpayment = 'cardpayment',
cash = 'cash'
}

export const MeanOfPaymentMapping: Record<MeanOfPayment, string> = {
[MeanOfPayment.cash]: "Cash",
[MeanOfPayment.cardpayment]: "Carte bancaire",
[MeanOfPayment.om]: "Orange Money",
[MeanOfPayment.tigo]: "Free Money (Tigo)",
[MeanOfPayment.western]: "Western Union",
[MeanOfPayment.moneygram]: "MoneyGram",
[MeanOfPayment.wave]: "Wave",
}
  