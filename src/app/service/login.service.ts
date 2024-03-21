import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Account } from '../model/account.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string = "http://localhost:8080/login"

  constructor(private http:HttpClient, private router:Router) {
  }

  public signedInUser = new BehaviorSubject<Account>({});
  currentUser = this.signedInUser.asObservable();
  

  login(account:Account){
    return this.http.post<Account>(this.baseUrl,account).pipe(
      map((data=>{
        this.signedInUser.next(data)
      }))
    )
  }

  /* login(account:Account){
    return this.http.post(`${this.baseUrl}/login`,account).subscribe({
      next: data =>{
        this.setCurrentUser(data);
        this.router.navigate(['/home']);
      }
    })
  }

  getCurrentUser(){
    return this.signedInUser.asObservable();
  }

  setCurrentUser(account:Account){
    this.currentUser.next(account)
  }
 */
}
