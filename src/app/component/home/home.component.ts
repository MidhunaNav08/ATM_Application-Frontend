import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/model/account.model';
import { AccountService } from 'src/app/service/account.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  account:Account = new Account();
  Id?:number;
  balance?:number;

  acc: Account = new Account();
  

  constructor(private loginService: LoginService, private accountService: AccountService) { }

  ngOnInit(): void {
    
    this.loginService.currentUser.subscribe({
      next: data=>{
        this.account = data;
        // console.log(this.account);
        this.Id = data.accountId;
        // console.log(this.Id);
      }
    })
    this.accountService.checkBalance(this.Id!).subscribe({
      next: data=>{
        this.balance = data;
        console.log(this.balance);
      }
    })
  }
}
