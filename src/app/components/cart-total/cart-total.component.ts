import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css']
})
export class CartTotalComponent implements OnInit {

  constructor(public cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

}
