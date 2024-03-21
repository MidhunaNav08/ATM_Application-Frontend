import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from './component/deposit/deposit.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { TransactionComponent } from './component/transaction/transaction.component';
import { TransferComponent } from './component/transfer/transfer.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { WithdrawComponent } from './component/withdraw/withdraw.component';

const routes: Routes = [
  {path:'',component: WelcomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'deposit',component:DepositComponent},
  {path:'withdraw',component:WithdrawComponent},
  {path:'transfer',component:TransferComponent},
  {path:'transaction',component:TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
