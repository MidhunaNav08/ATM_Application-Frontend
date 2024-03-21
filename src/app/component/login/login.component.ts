import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/model/account.model';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  account:Account = new Account();
  
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login(this.account).subscribe({
      next: data =>{
        this.router.navigate(['/home'])
      },
      error: err =>{
        alert("Inavlid login crededntials")
      }  
    })
  } 
  
}
