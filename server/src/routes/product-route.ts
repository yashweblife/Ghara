import { Router } from "express";
import { createProduct, deleteProductById, getAllProducts, getProductsById, updateProductById } from "../controllers/product-controller";
import { } from "../utils";

const router = Router();
/**
 * Routes for product
 * get    /product
 * get    /product/:id
 * post   /product
 * put    /product/:id
 * delete /product/:id
 */

router
    .get('/', getAllProducts)
    .get('/:id', getProductsById)
    .post('/', createProduct)
    .put('/:id', updateProductById)
    .delete('/:id', deleteProductById);

export default router;