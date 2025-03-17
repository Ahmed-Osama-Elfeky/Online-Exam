import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { AuthApiService } from 'auth-api';

@Component({
  selector: 'app-login',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  apiError!:string;

  loginForm:FormGroup = new FormGroup({

email:new FormControl(null,[Validators.required,Validators.email]),
password: new FormControl(null , [Validators.required, Validators.pattern(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])(?=\S*?(?:\W|_)).{8,})$/), Validators.min(6)]),


  })
  constructor(private _AuthApiService:AuthApiService){}

login():void{
  console.log(this.loginForm.value);
  this._AuthApiService.login(this.loginForm.value).subscribe({

    next:(res)=>{
      console.log(res);

    },
    error:(err)=>{
      console.log(err);
    }


  })

}


}
