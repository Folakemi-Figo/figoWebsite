import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FigoAgentComponent } from './figo-agent/figo-agent.component';

const routes: Routes = [
  {path: 'home', component: FigoAgentComponent},
{ path: '',  redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
