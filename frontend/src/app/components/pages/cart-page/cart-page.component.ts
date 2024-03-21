import { Component, OnInit } from '@angular/core';          // 1. Import Statements: Bring in necessary components and modules.
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({                                              // 2. Component Decorator: Define component metadata.
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {       // 3. Class Definition: Blueprint for the component.

  cart!: Cart;                                          // 4. 'cart' Property: Container for shopping cart data.

  constructor(private cartService: CartService) {      // 5. Constructor: Set up and subscribe to cart updates.
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  ngOnInit(): void {}                                // 6. 'ngOnInit' Method: Initialization hook (currently empty).
  removeFromCart(cartItem: CartItem) {               // 7. 'removeFromCart' Method: Remove items from the cart.
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {      // 8. 'changeQuantity' Method: Modify item quantities in the cart.
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }
}
