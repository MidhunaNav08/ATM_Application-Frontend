import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../model/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl: string = "http://localhost:8080"

  constructor(private Http:HttpClient) { }

  allTransaction() : Observable<Transaction[]>{
    return this.Http.get<Transaction[]>(`${this.baseUrl}/transactions`)
  }

  displayById(accountId:number) : Observable<Transaction[]>{
    return this.Http.get<Transaction[]>(`${this.baseUrl}/transaction/${accountId}`)
  }

}