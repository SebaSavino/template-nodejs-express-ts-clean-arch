import { Router } from 'express'

import { todosRouter } from './todos.router'


export const apiRouter = Router()

apiRouter.use('/todos', todosRouter)
