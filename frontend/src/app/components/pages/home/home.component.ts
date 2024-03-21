import { Component, OnInit } from '@angular/core';                    // Import Statements: Import required modules and services.
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({                                                         // Define a component for the home page, displaying a list of food items.
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];                                               // 'foods' Property: Holds an array of food items to display.
  constructor(                                                      // Constructor: Set up the component and fetch food items based on route parameters.
    private foodService: FoodService,       //helps with getting food-related information
    activatedRoute: ActivatedRoute          // is like a map that shows where you are on the website.
  ) {
    let foodObservable: Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)               //fetches food items based on that term.
        foodObservable = this.foodService.getAllFoodsBySearchTerm(
          params.searchTerm
        );
      else if (params.tag)                //gets food items related to that tag
        foodObservable = this.foodService.getAllFoodsByTag(params.tag);
      else foodObservable = foodService.getAll(); //gets all the food items

      foodObservable.subscribe((serverFoods) => { //When the information arrives (a list of food items), it's stored as serverFoods
        this.foods = serverFoods;                //These serverFoods are then shown on the web page as the list of food items you see.
      });
    });
  }

  ngOnInit(): void {}
}
