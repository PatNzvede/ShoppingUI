import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { OrderComponent } from './component/order/order.component';
import { ProductComponent } from './component/product/product.component';
import { LoginComponent } from './component/login/login.component';
import { ShoppingitemsComponent } from './component/shoppingitems/shoppingitems.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderComponent,
    ProductComponent,
    LoginComponent,
    ShoppingitemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
