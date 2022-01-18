import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shoppingitems',
  templateUrl: './shoppingitems.component.html',
  styleUrls: ['./shoppingitems.component.scss']
})
export class ShoppingitemsComponent implements OnInit {
  productList : any
  page : number =1;
  pageLength :number =10;
  orderSize : number =20;
   constructor(private api :ApiService, private cartService :CartService) { }
 
   ngOnInit(): void {
     this.api.getProducts().subscribe(res =>{
       this.productList = res;
       console.log(res);
       this.productList.forEach((a:any)=>{
         Object.assign(a,{ total :a.price});
       })
      })
   }
     addtocart(item : any) {
     this.cartService.addtoCart(item);
     console.log(item);
      }
   
 }
 