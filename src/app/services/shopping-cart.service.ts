import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cartItems: any[] = [];

  constructor() { }
  addProduct = (product) => {
    const items = this.getCartProducts();

    if (items) {
      this.getCartProducts;
      items.push(product);
      localStorage.setItem('shoppingCart', JSON.stringify(items));

    } else {
      this.cartItems.push(product);
      localStorage.setItem('shoppingCart', JSON.stringify(this.cartItems));
    }
  }

  getCartProducts = () => {
    let items = localStorage.getItem('shoppingCart')
    return JSON.parse(items)
  }

  getCartLength = () => {
    let items = this.getCartProducts();
    return items ? items.length : 0
  }

  getTotal = () => {
    let items = this.getCartProducts();
    return items?.reduce((acc, item) => (acc + item.price), 0)
  }

  removeItem = (product) => {
    const items = this.getCartProducts();
    console.log(items);
    
    const index = items.findIndex(item => item.id == product.id);

    if (index >= 0) {
      items.splice(index, 1);
      return localStorage.setItem('shoppingCart', JSON.stringify(items))
    }
  }
}
