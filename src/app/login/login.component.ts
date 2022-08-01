import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  activeAgentTab:boolean = true;
  activeMerchantTab: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  selectAgentTab(){
    this.activeAgentTab = true;
    this.activeMerchantTab = false
    
  }

  selectMerchantTab(){
    this.activeAgentTab = false;
    this.activeMerchantTab = true;
  }

}
