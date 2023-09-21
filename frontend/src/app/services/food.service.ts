import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tags';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOOD_URL, FOOD__BY_ID_URL, FOOD__BY_SEARCH_URL, FOOD__TAGS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Food[]>{
    return this.http.get<Food[]>(FOOD_URL);
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.http.get<Food[]>(FOOD__BY_SEARCH_URL + searchTerm);
  }

  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(FOOD__TAGS_URL);
  }

  getAllFoodsByTag(tag:string): Observable<Food[]>{
    return tag==="All"?
    this.getAll():
    this.http.get<Food[]>(FOOD__TAGS_URL + tag);
  }
  getFoodById(foodId:string):Observable<Food>{
    return this.http.get<Food>(FOOD__BY_ID_URL + foodId)
  } 
}
