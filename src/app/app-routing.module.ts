import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentLoginComponent } from './login/agent-login/agent-login.component';
import { LoginComponent } from './login/login.component';
import { MerchantLoginComponent } from './login/merchant-login/merchant-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WebsiteComponent } from './website/website.component';

const routes: Routes = [
  {path: 'home', component: WebsiteComponent},
{ path: '',  redirectTo: 'home', pathMatch: 'full'},


{
  path: 'login',
  loadChildren: () => import('./login/login-routing.module').then(m => m.LoggingRoutngModule)
},


{ path: 'page-not-found', component: PageNotFoundComponent },
{ path: '**', component: PageNotFoundComponent },

];




@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
