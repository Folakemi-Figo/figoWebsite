import { LoginRedirectComponent } from './login-redirect/login-redirect.component';
import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WebsiteComponent } from './website/website.component';
import { EmptyComponent } from './components/empty/empty.component';

const routes: Routes = [
  {path: 'home', component: WebsiteComponent},
{ path: '',  redirectTo: 'home', pathMatch: 'full'},

{path: 'figo/login', component: LoginRedirectComponent},

{path: 'login', redirectTo: 'figo/login', pathMatch: 'full'},



{ path: 'page-not-found', component: PageNotFoundComponent },
{ path: '**', component: PageNotFoundComponent },


{ path: '404', redirectTo: 'home',  pathMatch: 'full' },
{ path: '**',  redirectTo: 'home',pathMatch: 'full'  },

];



@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],

})
export class AppRoutingModule { }
