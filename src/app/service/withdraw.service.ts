import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WithdrawService {

  baseUrl: string = "http://localhost:8080"

  constructor(private Http:HttpClient) { }

  withdraw(accountId:number,amount:number) : Observable<Object>{
    return this.Http.put(`${this.baseUrl}/withdraw/${accountId}/${amount}`,{})
  }
}
