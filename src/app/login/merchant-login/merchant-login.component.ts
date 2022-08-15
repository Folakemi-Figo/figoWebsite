import { Router } from '@angular/router';
import { SharedService } from './../../services/shared.service';
import { MerchantAuthService } from './../../services/merchant/merchant-auth.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { AlertService } from 'src/app/components/alert/alert.service';

@Component({
  selector: 'app-merchant-login',
  templateUrl: './merchant-login.component.html',
  styleUrls: ['./merchant-login.component.scss'],
})
export class MerchantLoginComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    businessName: ['', Validators.required],
    businessAddress: ['', Validators.required],
    businessPhone: ['', Validators.required],
    businessLga: ['', Validators.required],
    businessState: ['', Validators.required],
    businessCountry: ['Nigeria', Validators.required],
    email: [''],
    password: [''],
  });

  thridFormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  loginFormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  isLinear = false;
  showPassword: boolean = false;
  stateList: any;
  lgaList: any;
  passwordVerified: any;
  email: any;
  token: any;
  logged: any;
  page1Active: boolean = true;
  page2Active: boolean = false;
  page3Active: boolean = false;
  page4Active: boolean = false;

  response: any;
  showSignUp: boolean = true;
  showLoader: any;
  bvn: any;
  page1Btn: boolean = false;
  page1Done: boolean = false;
  showPage1: boolean = true;
  showSpinner: any;
  showOtp: boolean = false;
  bvnVerified: boolean = false;
  bvnResponse: any;
  otpVerifired: boolean = false;
  otp: any;

  constructor(
    private _formBuilder: FormBuilder,
    private merchantAuth: MerchantAuthService,
    private alertService: AlertService,
    public sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getStateList();
  }

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

  clickButton(event: any) {
    event.stopPropagation();
  }

  onCodeCompleted(otp: any) {
    this.otp = otp;
    this.page1Btn = true;
  }

  onCodeChanged(otp: any) {
    if (otp.length != 4) {
      this.page1Btn = false;
    }
  }

  getBvn(e: any) {
    this.bvn = e.target.value;
    if (e.target.value.length === 11) {
      this.page1Btn = true;
    }
  }

  verifyInfo(stepper: MatStepper) {
    if (this.bvnVerified === false && this.otpVerifired === false) {
      this.showSpinner = true;
      let bvn = {
        bvn: this.bvn,
      };
      this.merchantAuth.verifyBVN(bvn).subscribe(
        (res: any) => {
          if (res.status === 'successful') {
            this.bvnResponse = res;
            this.showSpinner = false;

            this.bvnVerified = true;
            this.showOtp = true;
            this.page1Btn = false;
          } else {
            this.bvnResponse = res;
            this.showSpinner = false;
          }
        },
        (error) => {
          this.showSpinner = false;
          this.alertService.error(error.statusText);
        }
      );
    } else if (this.bvnVerified === true && this.otpVerifired === false) {
      this.showLoader = true;

      let data = {
        code: this.otp,
        bvn: this.bvn,
      };
      this.merchantAuth.verifyOTP(data).subscribe(
        (res: any) => {
          this.response = res;
          this.showSpinner = false;
          this.showLoader = false;
          if (res.status === 'successful') {
            this.token = res.data;
            localStorage.setItem('verified', JSON.stringify(res.data));

            this.otpVerifired = true;
            this.page1Btn = false;
            this.page1Active = false;
            this.page2Active = true;
            stepper.next();
          }

          if (res.status === 'failed') {
            this.alertService.error(res.message);
          }
        },
        (error) => {
          this.alertService.error(error.statusText);
        }
      );
    }
  }

  getStateList() {
    this.merchantAuth.getStates().subscribe(
      (res: any) => {
        return (this.stateList = res.data);
      },
      (error) => {
        this.alertService.error(error.statusText);
      }
    );
  }

  getLGAList(e: any) {
    this.showSpinner = true;
    let state = {
      state: e.value,
    };

    this.merchantAuth.getLGA(state).subscribe(
      (res: any) => {
        this.lgaList = res.data;
        this.showSpinner = false;

        return this.lgaList;
      },
      (error) => {
        this.alertService.error(error.statusText);
      }
    );
  }

  verifyPassword(e: any) {
    if (e.target.value != this.thridFormGroup.get('password')?.value) {
      this.passwordVerified = false;
    }
    if (e.target.value === this.thridFormGroup.get('password')?.value) {
      this.passwordVerified = true;
    }
  }

  login() {
    this.logged = true;
    this.showLoader = true;
    let id = {
      data: 20,
    };

    this.router.navigate(['external', 'nother-frontend', {url: 'https://www.any-public.url'}]);
    // let url =
    //   'http://localhost:4600/merchant/dashboard?' + id +
    //   'client_id=my_client_id' +
    //   '&redirect_uri=' +
    //   encodeURIComponent('http://localhost:55976/#/login/') +
    //   '&response_type=code%20token';
    // console.log(url);
    // window.location.href = url;

    // this.merchantAuth.stuff(id);
    // window.location.href=`http://localhost:4600/merchant/dashboard/`+` ${JSON.stringify(id)}`
    // this.router.navigate(['external','another-frontend'], {state: {userId: 123}});
    // this.router.navigate(['/external'], {
    //     state: {userId: 123},
    //     queryParams: {q: 1}
    // });

    // this.merchantAuth.loginMerchant(this.loginFormGroup.value).subscribe((res:any)=> {
    //   if(res.error === false){
    //     this.showLoader= false;
    //     this.logged = false;

    //     localStorage.setItem('userData', JSON.stringify(res.data.merchant.id));
    //     localStorage.setItem('token', res.data.token);
    //     // window.location.href = 'http://localhost:4600/admin/dashboard';

    //   }
    //   if(res.error === true){
    //     this.alertService.error(res.message)
    //     this.logged = false;
    //     this.showLoader= false;

    //   }
    // },
    // (error)=>{
    //   this.logged = false;
    //   this.showLoader= false;

    //   this.alertService.error(error.message)
    // })
  }

  showPage2(stepper: MatStepper) {
    stepper.next();

    this.page1Active = false;
    this.page2Active = true;
  }
  showPage3(stepper: MatStepper) {
    stepper.next();

    this.page2Active = false;
    this.page3Active = true;
  }

  goBackPage1(stepper: MatStepper) {
    this.page1Active = true;
    this.page2Active = false;

    stepper.previous();
  }

  goBackPage2(stepper: MatStepper) {
    this.page2Active = true;
    this.page3Active = false;

    stepper.previous();
  }

  compelete(stepper: MatStepper) {
    this.page3Active = false;
    this.page4Active = true;

    this.secondFormGroup.patchValue({
      password: this.thridFormGroup.get('password')?.value,
      email: this.thridFormGroup.get('email')?.value,
    });

    this.merchantAuth
      .updateMerchantInfo(
        this.secondFormGroup.value,
        this.token?.token,
        this.token?.id
      )
      .subscribe(
        (res: any) => {
          stepper.next();
        },
        (error) => {
          this.alertService.error(error.statusText);
        }
      );
  }
}
