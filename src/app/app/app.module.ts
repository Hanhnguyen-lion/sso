import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthModule} from "@auth0/auth0-angular"
import { enviroment } from '../enviroment';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { ProductsComponent } from '../products/products.component';
import { OrdersComponent } from '../orders/orders.component';
import { StocksComponent } from '../stocks/stocks.component';
import { InvestmentsComponent } from '../investments/investments.component';
import { MenuItemsComponent } from '../menu-items/menu-items.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuItemsComponent,
    LoginComponent,
    HomeComponent,
    ProductsComponent,
    OrdersComponent,
    StocksComponent,
    InvestmentsComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    CommonModule,
    FormsModule,
    AuthModule.forRoot({
      domain: enviroment.auth.domain,
      clientId: enviroment.auth.clientid,
      authorizationParams:{
        redirect_uri: window.location.origin
      }
    }),
    AppRoutingModule
  ],
  bootstrap:[
    AppComponent
  ]
})
export class AppModule { }
