import { Router } from "express";
import { createIngredient, deleteIngredientById, getAllIngredients, getIngredientById, updateIngredientById } from "../controllers/ingredient-controller";

const router = Router();

/**
 * Routes for ingredient
 * get    /ingredient
 * get    /ingredient/:id
 * post   /ingredient
 * put    /ingredient/:id
 * delete /ingredient/:id
 */
router
    .get('/', getAllIngredients)
    .get('/:id', getIngredientById)
    .post('/', createIngredient)
    .put('/:id', updateIngredientById)
    .delete('/:id', deleteIngredientById);
export default router;