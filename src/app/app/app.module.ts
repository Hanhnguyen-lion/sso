import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {AuthModule} from "@auth0/auth0-angular"
import { enviroment } from '../enviroment';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { ProductsComponent } from '../products/products.component';
import { OrdersComponent } from '../orders/orders.component';
import { InvestmentsComponent } from '../investments/investments.component';
import { MenuItemsComponent } from '../menu-items/menu-items.component';
import { HttpClientModule} from '@angular/common/http';
import { InventoryComponent } from '../inventory/inventory.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuItemsComponent,
    LoginComponent,
    HomeComponent,
    ProductsComponent,
    OrdersComponent,
    InvestmentsComponent,
    InventoryComponent,
    ConfirmDialogComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    RouterOutlet,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
  ],
  providers:[
    DatePipe
  ]
})
export class AppModule { }
