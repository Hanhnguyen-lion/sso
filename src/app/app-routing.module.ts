import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { StocksComponent } from './stocks/stocks.component';
import { InvestmentsComponent } from './investments/investments.component';

const routers: Routes = [
  {path:"", component: LoginComponent, canActivate: [AuthGuard]},
  {path:"home", component: HomeComponent, canActivate: [AuthGuard]},
  {path:"products", component: ProductsComponent},
  {path:"orders", component: OrdersComponent},
  {path:"stocks", component: StocksComponent},
  {path:"investments", component:InvestmentsComponent}
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
