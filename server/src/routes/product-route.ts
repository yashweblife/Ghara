import { Router } from "express";
import { toBeImplemented } from "../utils";

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
    .get('/', toBeImplemented)
    .get('/:id', toBeImplemented)
    .post('/', toBeImplemented)
    .put('/:id', toBeImplemented)
    .delete('/:id', toBeImplemented);

export default router;