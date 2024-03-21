import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  baseUrl: string = "http://localhost:8080"

  constructor(private Http:HttpClient) { }

  transfer(fromId:number,toId:number,amount:number) : Observable<object>{
    return this.Http.post(`${this.baseUrl}/transfer/${fromId}/${toId}/${amount}`, {});
  }
}
