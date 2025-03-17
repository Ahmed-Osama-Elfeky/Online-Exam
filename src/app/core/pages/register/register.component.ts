import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthApiService } from '../../../../../projects/auth-api/src/public-api';



@Component({
  selector: 'app-register',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {

  apiError!:string;

  registerForm: FormGroup = new FormGroup ({

    firstName : new FormControl (null,[Validators.required]),
    lastName : new FormControl (null,[Validators.required]),
    username : new FormControl (null ,[Validators.required]),
    email : new FormControl (null ,[Validators.required, Validators.email]),
    password: new FormControl(null , [Validators.required, Validators.pattern(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])(?=\S*?(?:\W|_)).{8,})$/), Validators.min(6)]),
    rePassword : new FormControl (null),
    phone: new FormControl (null),

  },this.compare)


constructor(private _AuthApiService:AuthApiService, private _Router:Router) { }

register():void{
  if(this.registerForm.valid){
    console.log(this.registerForm.value);
    this._AuthApiService.register(this.registerForm.value).subscribe({
      next:(res)=>{

        console.log(res);
        this._Router.navigate(['/login']);


      },
      error:(err)=>{
        console.log(err);
        this.apiError = err.error.message;
      }



    })
  } else {
    this.registerForm.setErrors({missMatch:true});
    this.registerForm.markAllAsTouched();
  }


}

compare(group:AbstractControl){

  return (group.get('password')?.value === group.get('rePassword')?.value) ? null : {missMath:true}

}




}
