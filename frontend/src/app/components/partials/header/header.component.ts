import { Component, OnInit } from '@angular/core';              // Define a header component responsible for displaying user-related information and cart quantity.
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartQuantity = 0;                                            // 'cartQuantity' Property: Keeps track of the number of items in the shopping cart.

  user!: User;                                                 // 'user' Property: Stores user information.
  constructor(                                                 // Constructor: Sets up the component and subscribes to cart and user updates.
    cartService: CartService,                                  // responsible for managing the shopping cart.
    private userService: UserService) {                        //responsible for user-related functionality.
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    });

    userService.userobservable.subscribe((newUser) => {
      this.user = newUser;
    });
  }
  ngOnInit(): void {}

  logout() {                                                  // 'logout' Method: Initiates user logout.
    this.userService.logout();
  }

  get isAuth() {                                              // 'isAuth' Getter: Checks if the user is authenticated.
    return this.user.token;
  }
}
