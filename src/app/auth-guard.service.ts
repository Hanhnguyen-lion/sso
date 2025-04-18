import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private auth: AuthService) { }

  canActivate(): boolean {

    this.auth.isAuthenticated$.subscribe((isAuthentcated: boolean): boolean | void =>{
      if (!isAuthentcated){
        this.auth.loginWithRedirect();
        return false;
      }
    })
    return true;
  }

}
