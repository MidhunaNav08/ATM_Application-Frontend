import { getLocaleId } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/model/account.model';
import { DepositService } from 'src/app/service/deposit.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'pm-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  account:Account = new Account();
  Id?:number;
  amount!:number;
  constructor(private depositService: DepositService, private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
    this.loginService.currentUser.subscribe({
      next: data=>{
        this.account = data;
        console.log(this.account);
        this.Id = data.accountId;
        console.log(this.Id);
      }
    })
  }

  deposit(){
    this.depositService.deposit(this.Id!,this.amount).subscribe({
      next: data=>{
        alert('deposit successful')
        this.router.navigate(['/home']);
      }
    })
  }

}
