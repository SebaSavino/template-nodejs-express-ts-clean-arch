import { Router } from 'express'

import { TodosController } from '../controllers'
import { TodosMongoDBDatasource } from '../../infrastructure/datasources'
import { TodosRepository } from '../../infrastructure/repositories/todos.repository'


export const todosRouter = Router()

const datasource = new TodosMongoDBDatasource()
const repository = new TodosRepository(datasource)
const controller = new TodosController(repository)

/**
 * @openapi
 * /todos:
 *   post:
 *     tags: 
 *       - Todos
 *     summary: Add new todo
 *     security:
 *       - apiKey: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateTodo'
 *     responses:
 *       201:
 *         description: Todo created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 */
todosRouter.post('/', controller.create.bind(controller))
