import { Component, OnInit, Input } from '@angular/core';

import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Product } from './../../models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[];

  constructor(private cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  addToCart(product){
    this.cart.addProduct(product)
  }

}
