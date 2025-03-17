import { Injectable } from '@angular/core';
import { Adaptor } from '../interface/adaptor';
import {  LoginAPIData, LoginRes } from '../interface/loginRes';


import { ForgetAPIData, forgetRes } from '../interface/forgetAPIData';
import { resetData } from '../interface/resetData';
import { codeRes } from '../interface/ResetAPIData ';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIAdaptorService implements Adaptor{

  constructor() { }

  adapt(data:LoginAPIData):LoginRes  {

    return {
      message:data.message,
      token:data.token,
      userEmail:data.user.email,
    }

}

adaptForget(data:ForgetAPIData):forgetRes{
  return {

    message:data.message,
    info:data.info,

  }
}

adaptCode(data:any):any{
  return{

    code:data.resetCode

  }
}




}
