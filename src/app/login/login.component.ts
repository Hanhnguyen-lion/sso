import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private auth: AuthService,
    private router: Router){
      if (this.isAuthenticated()){
        this.router.navigateByUrl("home");
      }
  }

  isAuthenticated(){
    return this.auth.isAuthenticated$.subscribe(isAuthenticated =>{
      return isAuthenticated;
    })
  }
}
