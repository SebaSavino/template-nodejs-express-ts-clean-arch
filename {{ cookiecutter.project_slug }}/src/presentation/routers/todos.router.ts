import { Router } from 'express'

import { TodosController } from '../controllers'
import { TodosMongoDBDatasource } from '../../infrastructure/datasources'
import { TodosRepository } from '../../infrastructure/repositories/todos.repository'


export const todosRouter = Router()

const datasource = new TodosMongoDBDatasource()
const repository = new TodosRepository(datasource)
const controller = new TodosController(repository)

todosRouter.route('/')
    .post(controller.create.bind(controller))
