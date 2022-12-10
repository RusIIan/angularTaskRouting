import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1,'pieces'),
        new Ingredient('French Fries', 20,'piecces')
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2,'pieces'),
        new Ingredient('Meat', 1,'pieces')
      ]),
    new Recipe('Salad with cod liver and quail eggs',
      'Рealthy eating?',
      'https://eda.ru/img/eda/c620x415/s1.eda.ru/StaticContent/Photos/9/7e/97e0e0cc1ffa41dba282fdf7fdd00f2b.jpg.webp',
      [
        new Ingredient('Quail egg',4,'pieces'),
        new Ingredient('Frilly s salad',50,'gram'),
        new Ingredient('Сanned cod liver',1,'can'),
        new Ingredient('Cherry tomatoes',10,'pieces'),
        new Ingredient('Red onion',1/2,'head'),
        new Ingredient('Grated parmesan cheese',3,'tablespoons'),
        new Ingredient('green basil',1,'branch'),
        new Ingredient('Extra virgin olive oil',3,'tablespoons')
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
