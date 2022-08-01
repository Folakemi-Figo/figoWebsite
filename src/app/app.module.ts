import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteComponent } from './website/website.component';
import { LoginComponent } from './login/login.component';
import { AgentLoginComponent } from './login/agent-login/agent-login.component';
import { MerchantLoginComponent } from './login/merchant-login/merchant-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    LoginModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
