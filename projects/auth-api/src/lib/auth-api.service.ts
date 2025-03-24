import { jwtDecode } from './../../../../node_modules/jwt-decode/build/cjs/index.d';



import { Injectable } from '@angular/core';
import { AuthAPI } from './base/AuthAPI'; // Corrected file name casing//+
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthEndPoint } from './enums/AuthApi.endPoints';
import { AuthAPIAdaptorService } from './adaptor/auth-api.adaptor';
import { LoginData } from './interface/loginData';
import { LoginAPIData, LoginRes } from './interface/loginRes';
import { RegisterData } from './interface/registerData';
import { ForgetData } from './interface/forgetData';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { resetData } from './interface/resetData';
import { forgetRes } from './interface/forgetAPIData';
import { codeRes } from './interface/ResetAPIData ';
import { Store } from '@ngrx/store';



@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AuthAPI  {
  user:any;

  constructor(private _HttpClient:HttpClient,private _AuthAPIAdaptorService:AuthAPIAdaptorService) { }

  // decodeToken(){
  //   if(sessionStorage.getItem('token')){

  //   this.user= jwtDecode(sessionStorage.getItem('token')!);
  //   }
  // }
   login(data: LoginData ): Observable<LoginRes> {
    return this._HttpClient.post(AuthEndPoint.LOGIN,data).pipe(

      map((res:any)=>this._AuthAPIAdaptorService.adapt(res)),
      catchError((err)=> of (err))




    )

  }
  register(data:RegisterData):Observable<LoginRes>{
    return this._HttpClient.post(AuthEndPoint.REGISTER,data).pipe(

      map((res:any)=>this._AuthAPIAdaptorService.adapt(res)),
      catchError((err)=> of (err))

    )




  }

forgetPassword(data:ForgetData):Observable<forgetRes>{
  return this._HttpClient.post(AuthEndPoint.FORGET_PASSWORD,data).pipe(

    map((res:any)=>this._AuthAPIAdaptorService.adaptForget(res)),
    catchError((err)=> of (err))



  )
}

verifyCode(data:resetData):Observable<codeRes>{
  return this._HttpClient.post(AuthEndPoint.VERIFY_CODE,data).pipe(
    map((res:any)=>this._AuthAPIAdaptorService.adaptCode(res)),
    catchError((err)=> of (err))
  )
}



}

