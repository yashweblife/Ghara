import type { Request, Response } from "express";
export function toBeImplemented(req: Request, res: Response) {
    console.warn('Method needs to be implemented')
    res.status(200).send('To be implemented')
}
export function checkIfNullish<T>(value: T | null | undefined): value is T {
    return value == null && value == undefined;
}
export const ISE = 'Internal Server Error';