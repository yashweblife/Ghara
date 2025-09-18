import { IngredientDTO } from "./ingredient-model";

export interface ProductDTO {
    id: number;
    name: string;
    price: number;
    ingredients: IngredientDTO[];
}