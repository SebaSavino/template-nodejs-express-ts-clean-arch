import express from 'express'

import { APIKeyAuthMiddleware } from './middlewares/api-key-auth.middleware'
import { errorMiddleware } from './middlewares/error.middleware'
import { ConnectMongoDB } from '../data/mongodb'
import { apiRouter } from './routers'
import { envs } from '../config'


export const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use(APIKeyAuthMiddleware)

server.use('/api/v1/', apiRouter)

server.use(errorMiddleware)

export async function runServer() {
    await ConnectMongoDB()
    await server.listen(envs.PORT)
}
