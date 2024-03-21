import { Component, OnInit } from '@angular/core';              // Import Statements: Bring in necessary modules and services.
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({                                                   // Define a component for displaying food details.
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent implements OnInit {
  food!: Food;                                                 // 'food' Property: Holds information about the selected food item.
  constructor(                                                 // Constructor: Set up the component and retrieve food details based on the route parameter.
    activatedRoute: ActivatedRoute,
    foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        foodService.getFoodById(params.id).subscribe((serverFood) => {
          this.food = serverFood;
        });
    });
  }

  addToCart() {                                               // 'addToCart' Method: Adds the selected food item to the cart and navigates to the cart page.
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

  ngOnInit(): void {}
}
