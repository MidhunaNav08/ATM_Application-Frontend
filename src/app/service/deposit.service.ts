import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  baseUrl: string = "http://localhost:8080"

  constructor(private http:HttpClient) { }

  deposit(accountId:number , amount:number) : Observable<Object>{
    return this.http.put(`${this.baseUrl}/deposit/${accountId}/${amount}`,{})
  }
}
