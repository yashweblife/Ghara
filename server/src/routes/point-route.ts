import { Router } from "express";
import { getAllPoints, getPointById, createPoint, updatePointById, deletePointById } from "../controllers/point-controller";

const router = Router();
/**
 * Routes for point
 * get    /point
 * get    /point/:id
 * post   /point
 * put    /point/:id
 * delete /point/:id
 */
router
    .get('/', getAllPoints)
    .get('/:id', getPointById)
    .post('/', createPoint)
    .put('/:id', updatePointById)
    .delete('/:id', deletePointById);
export default router;