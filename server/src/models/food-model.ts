import { IngredientDTO } from "./ingredient-model";

export interface FoodDTO {
    id: number;
    name: string;
    price: number;
    ingredients: IngredientDTO[];
}