import { ForgetData } from './../../../../../projects/auth-api/src/lib/interface/forgetData';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthApiService } from '../../../../../projects/auth-api/src/public-api';



@Component({
  selector: 'app-forget-password',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  resText!: string;


forgetForm:FormGroup = new FormGroup({
  email : new FormControl (null,[Validators.required,Validators.email])
})


constructor(private _AuthApiService:AuthApiService , private _Router:Router){}

forgetPass():void{
  console.log(this.forgetForm.value);
  this._AuthApiService.forgetPassword(this.forgetForm.value).subscribe({
    next:(res)=>{
      console.log(res);
      this._Router.navigate(['/verify-code']);


    },

error:(err)=>{
  console.log(err);
  this.resText = err.error.message;

}

  })



}



}
