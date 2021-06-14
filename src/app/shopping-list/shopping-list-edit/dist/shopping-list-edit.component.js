"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShoppingListEditComponent = void 0;
var core_1 = require("@angular/core");
var ingredient_model_1 = require("src/app/shared/ingredient.model");
var ShoppingListEditComponent = /** @class */ (function () {
    function ShoppingListEditComponent() {
        this.ingredientAdded = new core_1.EventEmitter();
    }
    ShoppingListEditComponent.prototype.ngOnInit = function () {
    };
    ShoppingListEditComponent.prototype.onAddItem = function () {
        var newIngredient = new ingredient_model_1.Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
        this.ingredientAdded.emit(newIngredient);
    };
    __decorate([
        core_1.ViewChild('nameInput', { static: false })
    ], ShoppingListEditComponent.prototype, "nameInputRef");
    __decorate([
        core_1.ViewChild('amountInput', { static: false })
    ], ShoppingListEditComponent.prototype, "amountInputRef");
    __decorate([
        core_1.Output()
    ], ShoppingListEditComponent.prototype, "ingredientAdded");
    ShoppingListEditComponent = __decorate([
        core_1.Component({
            selector: 'app-shopping-list-edit',
            templateUrl: './shopping-list-edit.component.html',
            styleUrls: ['./shopping-list-edit.component.css']
        })
    ], ShoppingListEditComponent);
    return ShoppingListEditComponent;
}());
exports.ShoppingListEditComponent = ShoppingListEditComponent;
