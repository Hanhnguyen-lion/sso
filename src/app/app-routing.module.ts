import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login/login.component';

const routers: Routes = [
  {path:"", component: LoginComponent, canActivate: [AuthGuard]},
  {path:"home", component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routers)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
