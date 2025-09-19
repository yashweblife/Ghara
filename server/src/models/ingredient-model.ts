import type { Ingredient } from "@prisma/client";

export interface IngredientDTO {
    id: number;
    name: string;
    quantity: number;
}

export function toIngredientDTO(ingredient: Ingredient) {
    return {
        id: ingredient.foodId,
        name: ingredient.productId,
        quantity: ingredient.quantity,
    };
}