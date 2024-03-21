import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/model/account.model';
import { LoginService } from 'src/app/service/login.service';
import { TransferService } from 'src/app/service/transfer.service';

@Component({
  selector: 'pm-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  account:Account = new Account();
  Id?:number;
  toId!:number;
  amount!:number;

  constructor(private transferService:TransferService, private loginService:LoginService, private router:Router) { }

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

  transfer(){
    this.transferService.transfer(this.Id!,this.toId,this.amount).subscribe({
      next: data =>{
        alert("transfer successful");
        this.router.navigate(['/home']);
      },
      error: err=>{
        alert("Insufficent balance")
      }
    })
  }

}
