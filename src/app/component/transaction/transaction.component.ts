import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/model/account.model';
import { Transaction } from 'src/app/model/transaction.model';
import { LoginService } from 'src/app/service/login.service';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'pm-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction_obj :Transaction = new Transaction()
  transactions? : Transaction[]
  account:Account = new Account();
  Id?:number;
  transactionDate = new Date();

  constructor(private transactionService:TransactionService, private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
    this.loginService.currentUser.subscribe({
      next: data=>{
        this.account = data;
        // console.log(this.account);
        this.Id = data.accountId;
        // console.log(this.Id);
      }
    })
    this.transactionService.displayById(this.Id!).subscribe({
      next: data=>{
        console.log(data);
        this.transactions = data;
      }
    })
  }

}
