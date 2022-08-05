import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-merchant-login',
  templateUrl: './merchant-login.component.html',
  styleUrls: ['./merchant-login.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('hidden', style({
        opacity: 0,
        visibility:'hidden',
      })),
      state( 'visible', style({
        opacity: 1,
        visibility:'visible'

      })),
      transition('hidden <=> visible', [
        animate('0.5s ease')
      ])
    ])
  ]
})
export class MerchantLoginComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thridFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  page1Active: boolean = true;
  page2Active: boolean = false;
  page3Active: boolean = false;
  page4Active: boolean = false;

  bvn:any;
  page1Btn: boolean = false; 
  page1Done: boolean = false;
  showPage1:boolean = true;
  showSpinner:any;
  showOtp: boolean = false;
  page2: boolean = false;
  bvnVerified:boolean = false;
  otpVerifired:boolean = false;
  otp:any;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  
  clickButton(event: any) {
    event.stopPropagation();
    console.log('You clicked on a button');
  }

  onCodeCompleted(otp:any){
    this.otp = otp;
    console.log(this.otp);
    this.page1Btn = true
    
  }

  getBvn(e:any){
    console.log(e.target.value);
    
    if(e.target.value.length === 11){
      this.page1Btn = true

      console.log(e.target.value.length);
      
    }
  }

  verifyInfo(){
    if(this.bvnVerified === false && this.otpVerifired === false){
      console.log('bvn', this.bvn);
      
      this.showSpinner = true;
      this.bvnVerified = true;
      this.showOtp = true;
      this.page1Btn = false
    }
    else if(this.bvnVerified === true && this.otpVerifired === false ){
      
      this.showSpinner = false;
      console.log(this.otp);
      
      this.otpVerifired = true;
      console.log(this.bvnVerified, this.otpVerifired);
      this.page1Btn = false;
      this.page1Done = true

    }
    
  }

  openPage2(){
    this.showPage1 = false;
    // this.showPage2 = 'visible';
    //   (this.showPage2 === 'visible') ? this.showPage2 = "visible" : this.showPage2 = "hidden";

  }

  showPage2(stepper: MatStepper){
    stepper.next();

    this.page1Active = false;
    this.page2Active = true;
  }
  showPage3(){
    this.page2Active = false;
    this.page3Active = true;
  }

  goBackPage1(stepper: MatStepper){
    this.page1Active = true;
    this.page2Active = false;

    stepper.previous();
}

  goBackPage2(stepper: MatStepper){
    this.page2Active = true;
    this.page3Active = false;

    stepper.previous();
  }


  compelete(stepper: MatStepper){
    this.page3Active = false;
    this.page4Active = true;
    stepper.next()
  }
}


