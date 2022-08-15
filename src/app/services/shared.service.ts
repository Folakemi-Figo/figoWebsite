import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LOADERS } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  endpoint: string = 'https://figo-app1.herokuapp.com/api/v1';
  token: any;
  headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*',
  };
   pattern = /^((\\+91-?)|0)?[0-9]{10}$/;
  constructor(private http: HttpClient) { }

  noLenght: any;
  noValue: any;
  


  keyPressNumbers(event:any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  getNumber(e:any){
    this.noValue = e.target.value;
  }
  getNumberLenght(e:any){
    this.noLenght = e.target.value.length;

  }
  
 
  
}
