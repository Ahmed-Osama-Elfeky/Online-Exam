import { Component } from '@angular/core';
import { AuthNavbarComponent } from "../auth-navbar/auth-navbar.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthFooterComponent } from "../auth-footer/auth-footer.component";

@Component({
  selector: 'app-auth-layout',
  imports: [AuthNavbarComponent, RouterOutlet, AuthFooterComponent, RouterLink],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

}
