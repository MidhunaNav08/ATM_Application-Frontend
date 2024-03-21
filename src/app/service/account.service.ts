import { HttpClient } from '@angular/common/http';
import { NonNullAssert } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Account } from '../model/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl: string = "http://localhost:8080"

  account:Account = new Account();
  

  constructor(private http:HttpClient) { }

  addAccount(account:Account) : Observable<object>{
    console.log(account);
    return this.http.post(`${this.baseUrl}/account`,account)
  }


  getAllAccount() : Observable<Account[]>{
    return this.http.get<Account[]>(`${this.baseUrl}/allAccount`)
  }

  checkBalance(accountId:number) : Observable<number>{
    return this.http.get<number>(`${this.baseUrl}/checkBalance/${accountId}`)
  }
}