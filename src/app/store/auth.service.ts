import { User } from './user.model';
import  { jwtDecode } from 'jwt-decode';  // Import the jwt-decode library
import { Store } from '@ngrx/store';
import { updateUser } from './auth.action';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root' // Automatically available at the root level
})

export class AuthService {
  constructor(private store: Store) {}

  user:any;
  decodeToken() {
    try {

      this.user= jwtDecode(localStorage.getItem('token')!);


      // Dispatch an action to store the user in the store
      this.store.dispatch(updateUser(this.user));

    } catch (error) {
      console.error('Error decoding token', error);
    }
  }
  storeToken(token: string): void {
    localStorage.setItem('jwtToken', token);
    this.decodeToken();
  }

  // Retrieve the token from localStorage
  getStoredToken(): string | null {
    return localStorage.getItem('jwtToken');
  }
}
