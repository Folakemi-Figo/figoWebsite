import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'figo-website';


  ngOnInit(): void {
    AOS.init();
  }


  onActivate(event:any) {
    window.scroll(0,0);
    
}
}
