import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MerchantAuthService {
  endpoint1: string = 'https://figo-merchant-backend.herokuapp.com/api/v1';
  endpoint2: string = 'https://figo-app1.herokuapp.com/api/v1/';
  token: any;
  HOST_URL:any = 'http://localhost:4600/';
  headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*',
    Authorization: ``
  };

  constructor(private router: Router, private http: HttpClient) {}

  verifyBVN(data: any) {
    console.log(data);

    return this.http.post(
      `${this.endpoint1}/auth/send-bvn-verification-code`,
      data,
      { headers: this.headerDict }
    );
  }

  verifyOTP(data: any) {
    console.log(data);

    return this.http.post(`${this.endpoint1}/auth/verify-bvn`, data, {
      headers: this.headerDict,
    });
  }

  // getToken() {
  //   return JSON.parse(localStorage.getItem('user' )! );
  // }

  updateMerchantInfo(data: any, token: any, id:any) {


    this.headerDict.Authorization =  `Bearer ${token}`;
     console.log(token,id, data);
    

    return this.http.put(`${this.endpoint1}/merchant/${id}`, data, {
      headers:  this.headerDict,
    });
  }

  getStates() {
    return this.http.get(`${this.endpoint2}state/`, {
      headers: this.headerDict,
    });
  }

  getLGA(state: any) {
    console.log(state);

    return this.http.post(`${this.endpoint2}state/lga`, state, {
      headers: this.headerDict,
    });
  }


  loginMerchant(data:any){
    return this.http.post(`${this.endpoint1}/auth/login`, data, {
      headers: this.headerDict,
    });
  }

  getToken() {
    return localStorage.getItem('token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    return authToken !== null ? true : false;
  }

  stuff(params1:any){


    console.log('hiii');
    
    return this.http.post(`${this.HOST_URL}`, params1, {
      headers: this.headerDict
    });

  }

}
