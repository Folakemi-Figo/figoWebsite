import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-login',
  templateUrl: './agent-login.component.html',
  styleUrls: ['./agent-login.component.scss']
})
export class AgentLoginComponent implements OnInit {
  phoneNumber!: string;
  code: any;

  constructor() { }

  ngOnInit(): void {
  }

  onCodeChanged(code: string) {}

  // this called only if user entered full code
  onCodeCompleted(code: string) {
    // console.log(code);
    return (this.code = code);
  }

}
