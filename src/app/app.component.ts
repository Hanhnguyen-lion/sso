import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Single Sign On';

  constructor(public auth: AuthService){
  }

  login(){
    this.auth.loginWithRedirect();
  }

  logout(){
    this.auth.logout();
  }

  isAuthenticated(){
    this.auth.isAuthenticated$.subscribe((isAuthenticated: boolean) =>{
      return isAuthenticated;
    })
  }
}
