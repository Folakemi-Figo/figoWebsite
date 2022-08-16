import { EmptyComponent } from './../components/empty/empty.component';
import { AlertModule } from './../components/alert/alert.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgentLoginComponent } from './agent-login/agent-login.component';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodeInputModule } from 'angular-code-input';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    LoginComponent,
    AgentLoginComponent,
  ],
  imports: [
    BrowserModule,
    CodeInputModule,
    NgxSpinnerModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
