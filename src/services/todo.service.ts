import CrudService from "./crud.service";
import {ITodo, ITodoBasicFields} from "../models/ToDo";

class TodoService extends CrudService<ITodo, ITodoBasicFields> {
    constructor() {
        super();
        this.url = "/todo";
    }
}

export default new TodoService();
