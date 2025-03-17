import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

export const reqHeaderInterceptor: HttpInterceptorFn = (req, next) => {

  const _PLATFORM_ID=inject(PLATFORM_ID)

if(isPlatformBrowser(_PLATFORM_ID)){

if(req.url.includes('changePassword') || req.url.includes('deleteMe') || req.url.includes('editProfile')|| req.url.includes('logout')|| req.url.includes('profileData')){
  if(sessionStorage.getItem('token') != null){
    req= req.clone({
     setHeaders:{token : sessionStorage.getItem('token')!}

   })

 }
}

}


  return next(req);
};
