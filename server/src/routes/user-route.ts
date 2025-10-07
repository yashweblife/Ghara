import { Router } from "express";
import {
    createUser,
    deleteUserById,
    getAllUsers,
    getUserById,
    getUserPoints,
    updateUserById
} from "../controllers/user-controller";

const router: Router = Router();

/**
 * Routes for user
 * get    /user
 * get    /user/:id
 * get    /user/:id/points
 * post   /user
 * put    /user/:id
 * delete /user/:id
 */


router
    .get('/', getAllUsers)
    .get('/:id', getUserById)
    .get('/:id/points', getUserPoints)
    .post('/', createUser)
    .put('/:id', updateUserById)
    .delete('/:id', deleteUserById);

export default router;