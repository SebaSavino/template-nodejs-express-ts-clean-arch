export class Todo {
    constructor(
        public completed: boolean,
        public title: string,
        public id: string
    ) { }

    static fromObject(obj: { [key: string]: any }): Todo {
        const completed = obj["completed"]
        const title = obj["title"]
        const id = obj["id"]

        return new Todo(completed, title, id)
    }
}
