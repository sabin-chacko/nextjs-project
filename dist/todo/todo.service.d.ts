import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { todoitemdto } from './dto/todo.dto';
export declare class TodoService {
    private tododataModel;
    constructor(tododataModel: Model<TodoDocument>);
    create(todoitemdto: todoitemdto): Promise<Todo>;
    findAll(userid: string): Promise<Todo[]>;
    updatetodo(todoitemdto: todoitemdto): Promise<Todo>;
}
