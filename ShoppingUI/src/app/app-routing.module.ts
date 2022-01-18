import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { OrderComponent } from './component/order/order.component';
import { ProductComponent } from './component/product/product.component';
import { ShoppingitemsComponent } from './component/shoppingitems/shoppingitems.component';

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch:'full'},
  {path:'products', component: ProductComponent},
  {path:'login', component :LoginComponent},
  {path:'shopping', component: ShoppingitemsComponent},
  {path :'order',component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
