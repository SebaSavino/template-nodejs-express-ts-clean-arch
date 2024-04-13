import { ITodosRepository } from "../../domain/repositories";
import { ITodosDatasource } from "../../domain/datasources";
import { CreateTodoDTO } from "../../domain/dtos";
import { Todo } from "../../domain/entities";


export class TodosRepository implements ITodosRepository {

    constructor(
        private readonly _todosDatasource: ITodosDatasource
    ) { }

    create(createTodoDTO: CreateTodoDTO): Promise<Todo> {
        return this._todosDatasource.create(createTodoDTO)
    }

}
