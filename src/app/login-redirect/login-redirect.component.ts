import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-redirect',
  templateUrl: './login-redirect.component.html',
  styleUrls: ['./login-redirect.component.scss']
})
export class LoginRedirectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  openMerchant(){
    // window.location.href = 'http://localhost:4600';
  }

  openAgent(){
    // window.location.href = 'http://localhost:4800';

  }
}
