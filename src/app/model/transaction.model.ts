import { Account } from "./account.model"

export class Transaction {
    transactionId?:number;
    transactionDate?:Date;
    transactionType?:string;
    transactionAmount?:number;
    accountNo?:number;
    account?:Account;
}
