import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './core/pages/login/login.component';
import { RegisterComponent } from './core/pages/register/register.component';

export const routes: Routes = [

{path:'',component:AuthLayoutComponent,children:[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent,title:'Login'},
    {path:'register',loadComponent:()=>import('./core/pages/register/register.component').then((classes)=>classes.RegisterComponent),title:'Register'},
    {path:'forget-Password',loadComponent:()=> import('./core/pages/forget-password/forget-password.component').then((classes)=>classes.ForgetPasswordComponent),title:'Forget Password'},
    {path:'verify-code',loadComponent:()=> import('./core/pages/verify-code/verify-code.component').then((classes)=>classes.VerifyCodeComponent),title:'Verify Code'},
    {path:'set-Password',loadComponent:()=> import('./core/pages/set-password/set-password.component').then((classes)=>classes.SetPasswordComponent),title:'Set a Password'},
]}




];
