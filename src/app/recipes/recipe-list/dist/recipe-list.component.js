"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RecipeListComponent = void 0;
var core_1 = require("@angular/core");
var recipe_model_1 = require("../recipe.model");
var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent() {
        this.recipeWasSelected = new core_1.EventEmitter();
        this.recipes = [
            new recipe_model_1.Recipe('A test recipe', 'this is a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872'),
            new recipe_model_1.Recipe('Another  test recipe', 'this is a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872')
        ];
    }
    RecipeListComponent.prototype.ngOnInit = function () {
    };
    RecipeListComponent.prototype.onRecipeSelected = function (recipe) {
        this.recipeWasSelected.emit(recipe);
    };
    __decorate([
        core_1.Output()
    ], RecipeListComponent.prototype, "recipeWasSelected");
    RecipeListComponent = __decorate([
        core_1.Component({
            selector: 'app-recipe-list',
            templateUrl: './recipe-list.component.html',
            styleUrls: ['./recipe-list.component.css']
        })
    ], RecipeListComponent);
    return RecipeListComponent;
}());
exports.RecipeListComponent = RecipeListComponent;
