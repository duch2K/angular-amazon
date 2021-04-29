import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Product } from './../../models/products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[];

  constructor(public cart: ShoppingCartService) { }

  ngOnInit(): void {
    this.getShoppingCart();
  }

  getShoppingCart(){
   this.items =  this.cart.getCartProducts();
  }

  deleteEventHandler(product){
    this.cart.removeItem(product);
  }
}
