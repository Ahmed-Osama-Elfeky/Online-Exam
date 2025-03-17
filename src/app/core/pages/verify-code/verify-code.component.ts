import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from 'auth-api';

@Component({
  selector: 'app-verify-code',
  imports: [ReactiveFormsModule],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss'
})
export class VerifyCodeComponent {

  codeForm: FormGroup = new FormGroup ({
    code : new FormControl (null,[Validators.required])
  })
  constructor(private _AuthApiService:AuthApiService , private _Router:Router){}

  verify():void{
    console.log(this.codeForm.value);

    this._AuthApiService.verifyCode(this.codeForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        this._Router.navigate(['/set-password']);
      },
      error:(err)=>{
        console.log(err);
        alert('Invalid code');
      }
    })

  }

}
