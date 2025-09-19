import type { Request, Response } from "express";
export function toBeImplemented(req: Request, res: Response) {
    console.warn('Method needs to be implemented')
    res.status(200).send('To be implemented')
}