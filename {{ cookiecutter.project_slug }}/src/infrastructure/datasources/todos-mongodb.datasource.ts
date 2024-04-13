import { ITodosDatasource } from "../../domain/datasources";
import { ValidationError } from "../../domain/errors";
import { CreateTodoDTO } from "../../domain/dtos";
import { TodoModel } from "../../data/mongodb";
import { Todo } from "../../domain/entities";


export class TodosMongoDBDatasource implements ITodosDatasource {

    constructor(
        private readonly _todoModel = TodoModel
    ) { }

    async create(createTodoDTO: CreateTodoDTO): Promise<Todo> {
        const { title } = createTodoDTO
        const exists = await this._todoModel.findOne({ title })

        if (exists) {
            throw new ValidationError(`Title \'${title}'\ already taken.`)
        }

        const newTodo = await this._todoModel.create(createTodoDTO)
        return Todo.fromObject(newTodo)
    }
}
