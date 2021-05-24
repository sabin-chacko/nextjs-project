import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { updateTodoDto, todoitemdto } from './dto/todo.dto';
export declare class TodoService {
    private tododataModel;
    constructor(tododataModel: Model<TodoDocument>);
    create(todoitemdto: todoitemdto): Promise<Todo>;
    findAll(userid: string): Promise<Todo[]>;
    updatetodo(id: string, updateTodoDto: updateTodoDto): Promise<Todo>;
}
