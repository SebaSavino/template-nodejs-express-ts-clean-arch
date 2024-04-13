import { CreateTodoDTO } from "../dtos";
import { Todo } from "../entities/todo";


export interface ITodosRepository {
    create(createTodoDTO: CreateTodoDTO): Promise<Todo>
}
