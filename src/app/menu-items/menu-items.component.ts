import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  standalone: false,
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.css'
})
export class MenuItemsComponent {

  user: any = {
    email: "",
    name: ""
  }

  constructor(private auth: AuthService){
    this.authUser();
  }

  isAuthenticated(){
    return this.auth.isAuthenticated$.subscribe(isAuthenticated =>{
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
