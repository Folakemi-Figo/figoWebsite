import { LoginRedirectComponent } from './login-redirect/login-redirect.component';
import { UserAuthGuard } from './services/user-auth.guard';
import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WebsiteComponent } from './website/website.component';
import { EmptyComponent } from './components/empty/empty.component';

const routes: Routes = [
  {path: 'home', component: WebsiteComponent},
{ path: '',  redirectTo: 'home', pathMatch: 'full'},

{path: 'figo/login', component: LoginRedirectComponent},

{
  path: 'login',
  loadChildren: () => import('./login/login-routing.module').then(m => m.LoggingRoutngModule)
},


{ path: 'page-not-found', component: PageNotFoundComponent },
{ path: '**', component: PageNotFoundComponent },


];



@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],

})
export class AppRoutingModule { }
