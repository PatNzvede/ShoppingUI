import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ApiService } from 'src/app/services/api.service';
import { OrderModule } from './OrderModule';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public products : any =[];
  public grandTotal :number =0;
  orderList :OrderModule = new OrderModule();

  constructor(private cartService: CartService, private apiService :ApiService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
   .subscribe(res=>{
    this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
  })
  }

  removeitem( item: any) {
    this.cartService.removeCartItem(item);
    }
  
    emptycart () {
      this.cartService.removeAllCart();
    }

    checkoutcart(){   
    this.apiService.postCarts(this.products)
      .forEach(product => this.products.push(product)).then
     alert("Orders processed successfully");
     this.emptycart();
  }
}