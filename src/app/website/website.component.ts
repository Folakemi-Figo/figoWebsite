import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel ;

  
  constructor(private spinner: NgxSpinnerService) { }

  images = [3,2].map((n) => `../../assets/images/carousel${n}.png`);

  //selectedItem = false;
  items: any= [
    { name: 'Purchases' },

    { name: 'Funds Transfer' },
  { name: 'Cash Withdrawal' },
  {  name: 'Airtime and Data Purchase' },
  { name: 'Eletricity' },
  { name: 'Cable TV Subscription' },
  { name: 'Education' },
  {  name: 'Tickets' },
  {  name: 'Insurance and Pension' }
  ];

  ngOnInit(): void {
  }


  prevSlide() {
    this.carousel.prev();
  }

  nextSlide() {
    this.carousel.next();
  }

  stopSlider() {
    this.carousel.pause();
  }


  openAgentWebApp(){
    window.location.href ='https://figo-africa.netlify.app/user/login' ; 
  }

}
