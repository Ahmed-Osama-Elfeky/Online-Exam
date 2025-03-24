import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './store/user.model';
import { AuthService } from './store/auth.service';
import { selectUser } from './store/auth.selector';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[AuthService],
})
export class AppComponent implements OnInit {
  title = 'Exam-online';
  user$: Observable<User | null>;

  constructor(private authService:AuthService , private store: Store) {
    this.user$ = this.store.select(selectUser); // Selecting the user from the store
  }

  ngOnInit(): void {
    const token = this.authService.getStoredToken();
    if (token) {
      this.authService.decodeToken(); // Decode and store user data if token exists
    }
  }

  login(): void {
    const fakeToken = 'your-jwt-token-here'; // Use a real JWT token in a real app
    this.authService.storeToken(fakeToken);
  }
}
