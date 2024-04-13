import { Request, Response, NextFunction } from "express";

import { ITodosRepository } from "../../domain/repositories";
import { CreateTodoDTO } from "../../domain/dtos";


export class TodosController {

    constructor(
        private readonly _todosRepository: ITodosRepository
    ) { }

    create(req: Request, res: Response, next: NextFunction) {
        const createTodoDTO = CreateTodoDTO.create(req.body)

        this._todosRepository.create(createTodoDTO)
            .then(todo => res.status(201).json(todo))
            .catch(next)
    }
}
