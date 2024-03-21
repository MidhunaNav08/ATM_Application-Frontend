import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/model/account.model';
import { LoginService } from 'src/app/service/login.service';
import { WithdrawService } from 'src/app/service/withdraw.service';

@Component({
  selector: 'pm-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  account:Account = new Account();
  Id?:number;
  amount!:number;
  
  constructor(private withdrawService:WithdrawService, private loginService:LoginService, private router:Router) { }

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

  withdraw(){
    this.withdrawService.withdraw(this.Id!,this.amount).subscribe({
      next: data=>{
        alert('withdraw succesfull')
        this.router.navigate(['/home'])
      },
      error: err=>{
        alert("Insufficent balance")
      }
    })
  }
}
