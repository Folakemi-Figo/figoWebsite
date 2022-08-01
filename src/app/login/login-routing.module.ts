import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentLoginComponent } from './agent-login/agent-login.component';
import { LoginComponent } from './login.component';
import { MerchantLoginComponent } from './merchant-login/merchant-login.component';



const routes: Routes = [
    { path: 'login',   redirectTo: 'login', pathMatch: 'full' },

    {path: '',
    component: LoginComponent,
    children: [
      { path: 'agent', component: AgentLoginComponent },
      { path: 'merchant', component: MerchantLoginComponent },
    ]
    
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggingRoutngModule { }