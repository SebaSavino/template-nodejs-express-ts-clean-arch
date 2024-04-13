import { NextFunction, Request, Response } from "express";

import { ValidationError } from "../../domain/errors";
import { logger } from "../../config";


export function errorMiddleware(error: any, _: Request, res: Response, __: NextFunction) {
    if (error instanceof ValidationError) {
        res.status(400).json({ error: error.message })
        return
    }

    logger.error('Unknown error', error)
    res.status(500).json({ error: 'Internal server error' })
}
