import { NextFunction, Request, Response } from "express";

import { envs } from "../../config";


export function APIKeyAuthMiddleware(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers['x-api-key']

    if (!apiKey) {
        res.status(401).json({ error: 'Unauthorized' })
        return
    }

    if (apiKey !== envs.API_KEY) {
        res.status(403).json({ error: 'Forbidden' })
        return
    }

    next()
}   
