import { CreateTodoDTO } from "../dtos";
import { Todo } from "../entities/todo";


export interface ITodosDatasource {
    create(createTodoDTO: CreateTodoDTO): Promise<Todo>;
}
