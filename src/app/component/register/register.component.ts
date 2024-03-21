import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Account } from 'src/app/model/account.model';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  account:Account = new Account();

  constructor(private accountService:AccountService, private router:Router) { }

  ngOnInit(): void {
  }

  newaccount(){
    this.accountService.addAccount(this.account).subscribe({
      next: data =>{
        this.router.navigate(['/login']);
      }
    })
  }

}
