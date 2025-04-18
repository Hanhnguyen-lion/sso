import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  user: any = {
    email: "",
    name: ""
  }

  constructor(public auth: AuthService){
    this.authUser();
  }

  isAuthenticated(){
    this.auth.isAuthenticated$.subscribe(isAuthenticated =>{
      return isAuthenticated;
    })
  }

  logout(){
    this.auth.logout();
  }

  authUser(){
    this.auth.user$.subscribe(user =>{
      this.user = 
      {
        email: user?.email,
        name: user?.name
      }
    })
  }

}
