import type { Request, Response } from "express";
import userRepo from "../repositories/user-repository";
import {
    checkIfNullish,
    ISE,
    toBeImplemented
} from "../utils";
export function getAllUsers(req: Request, res: Response) {
    try {
        const users = userRepo.findAll();
        if (checkIfNullish(users)) {
            throw { status: 500, message: 'Failed to fetch all users\nUsers was nullish ' }
        }
        res.status(200).json(users);
    } catch (err: any) {
        res.status(err.status || 500).send(err.message || ISE)
    }
}
export function getUserById(req: Request, res: Response) {
    toBeImplemented(req, res)
}
export function getUserPoints(req: Request, res: Response) {
    toBeImplemented(req, res)
}
export function createUser(req: Request, res: Response) {
    toBeImplemented(req, res)
}
export function updateUserById(req: Request, res: Response) {
    toBeImplemented(req, res)
}
export function deleteUserById(req: Request, res: Response) {
    toBeImplemented(req, res)
}