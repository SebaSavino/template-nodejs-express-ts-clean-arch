import express from 'express'
import swaggerUI from 'swagger-ui-express'

import { APIKeyAuthMiddleware } from './middlewares/api-key-auth.middleware'
import { errorMiddleware } from './middlewares/error.middleware'
import { openApiConf } from '../config/swagger'
import { ConnectMongoDB } from '../data/mongodb'
import { apiRouter } from './routers'
import { envs } from '../config'


export const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(openApiConf))
server.use('/api/v1/', APIKeyAuthMiddleware, apiRouter)

server.use(errorMiddleware)

export async function runServer() {
    await ConnectMongoDB()
    await server.listen(envs.PORT)
}
