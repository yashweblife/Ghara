import { Router } from "express";
import {
    createFood,
    deleteFoodById,
    getAllFoods,
    getFoodById,
    updateFoodById
} from "../controllers/food-controller";

const router = Router();

/**
 * Routes for food
 * get    /food
 * get    /food/:id
 * post   /food
 * put    /food/:id
 * delete /food/:id
 */
router
    .get('/', getAllFoods)
    .get('/:id', getFoodById)
    .post('/', createFood)
    .put('/:id', updateFoodById)
    .delete('/:id', deleteFoodById);

export default router;