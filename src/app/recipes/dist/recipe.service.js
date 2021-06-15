"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RecipeService = void 0;
var core_1 = require("@angular/core");
var ingredient_model_1 = require("../shared/ingredient.model");
var recipe_model_1 = require("./recipe.model");
var RecipeService = /** @class */ (function () {
    function RecipeService(shoppingListService) {
        this.shoppingListService = shoppingListService;
        this.recipeSelected = new core_1.EventEmitter();
        this.recipes = [
            new recipe_model_1.Recipe('Tasty Schnitzel', 'A super-tasty Schnitzel - just awesome!', 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG', [
                new ingredient_model_1.Ingredient('Meat', 1),
                new ingredient_model_1.Ingredient('French Fries', 20)
            ]),
            new recipe_model_1.Recipe('Big  Fat Pasta Plate', 'Pasta baked in the oven with cheese', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872', [
                new ingredient_model_1.Ingredient('Buns', 2),
                new ingredient_model_1.Ingredient('Meat', 1)
            ])
        ];
    }
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    RecipeService.prototype.addIngredientsToShoppingList = function (ingredients) {
        this.shoppingListService.addIngredients(ingredients);
    };
    RecipeService = __decorate([
        core_1.Injectable()
    ], RecipeService);
    return RecipeService;
}());
exports.RecipeService = RecipeService;
