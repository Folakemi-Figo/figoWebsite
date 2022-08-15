import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyComponent } from '../components/empty/empty.component';
import { UserAuthGuard } from '../services/user-auth.guard';
import { AgentLoginComponent } from './agent-login/agent-login.component';
import { LoginComponent } from './login.component';
import { MerchantLoginComponent } from './merchant-login/merchant-login.component';



const routes: Routes = [



    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggingRoutngModule { }