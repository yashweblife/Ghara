import { Router } from "express";

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
    .get('/', (req, res) => { })
    .get('/:id', () => { })
    .post('/', () => { })
    .put('/:id', () => { })
    .delete('/:id', () => { })

export default router;