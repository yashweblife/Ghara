import type { Food } from "@prisma/client";
import { IngredientDTO } from "./ingredient-model";

export interface FoodDTO {
    id: number;
    name: string;
    price: number;
    ingredients: IngredientDTO[];
}
export function toFoodDTO(food: Food) {
    return {
        id: food.id,
        name: food.name,
        price: food.price,
        ingredients: []
    }
}