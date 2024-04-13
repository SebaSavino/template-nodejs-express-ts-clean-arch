import { ValidationError } from "../../errors"


export class CreateTodoDTO {

    private constructor(
        public title: string,
        public completed: boolean
    ) { }

    static create(values: { [key: string]: any }): CreateTodoDTO {
        const title = values["title"]
        const completed = !!values["completed"]

        if (!title) {
            throw new ValidationError('Title is required.')
        }

        return new CreateTodoDTO(title, completed)
    }
}
