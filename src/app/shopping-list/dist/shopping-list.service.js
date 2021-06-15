"use strict";
exports.__esModule = true;
exports.ShoppingListService = void 0;
var core_1 = require("@angular/core");
var ingredient_model_1 = require("../shared/ingredient.model");
var ShoppingListService = /** @class */ (function () {
    function ShoppingListService() {
        this.ingredientsChanged = new core_1.EventEmitter();
        this.ingredients = [
            new ingredient_model_1.Ingredient('Apples', 5),
            new ingredient_model_1.Ingredient('Tomatos', 3)
        ];
    }
    ShoppingListService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    };
    ShoppingListService.prototype.addIngredients = function (ingredients) {
        var _a;
        (_a = this.ingredients).push.apply(_a, ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    };
    return ShoppingListService;
}());
exports.ShoppingListService = ShoppingListService;
