import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Product } from './../../models/products.model';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css']
})
export class CartProductsComponent implements OnInit {
  @Input() items: Product[];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()

  constructor(public cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  removeItem(product){
    // this.cart.removeItem(product);
    this.deleteEvent.emit(product);
  }

}
